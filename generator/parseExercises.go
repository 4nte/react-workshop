package main

import (
	"bytes"
	"fmt"
	strcase "github.com/iancoleman/strcase"
	"io/ioutil"
	"log"
	"os"
	"path"
	"strconv"
	"strings"
	"text/template"
)

type module struct {
	Id            int
	Name          string
	FormattedName string
	Exercises     []exercise
	DirName       string
}

type exercise struct {
	Id            int
	FormattedName string
	Name          string
	DirName       string
}

const srcDir = "src"

func parseFilename(fileName string) (int, string) {
	fragments := strings.SplitN(fileName, "-", 2)

	id, err := strconv.Atoi(fragments[0])
	if err != nil {
		panic(fmt.Errorf("failed to parse module id: %w", err))
	}
	return id, fragments[1]
}

func main() {
	files, err := ioutil.ReadDir(path.Join(srcDir, "modules"))
	if err != nil {
		panic(err)
	}

	// Append module dirs array
	var moduleDirs []os.FileInfo
	for _, file := range files {
		if !file.IsDir() {
			continue
		}
		moduleDirs = append(moduleDirs, file)
	}

	modules := make([]module, len(moduleDirs))

	for _, moduleDir := range moduleDirs {
		if !moduleDir.IsDir() {
			continue
		}
		id, name := parseFilename(moduleDir.Name())

		var exercises []exercise
		exerciseDirs, err := ioutil.ReadDir(path.Join(path.Join(srcDir, "modules"), moduleDir.Name()))
		if err != nil {
			panic(err)
		}

		for _, exerciseDir := range exerciseDirs {
			if !exerciseDir.IsDir() {
				continue
			}
			id, name := parseFilename(exerciseDir.Name())

			formattedName := strcase.ToCamel(name)
			exercises = append(exercises, exercise{
				Id:            id,
				FormattedName: formattedName,
				DirName:       exerciseDir.Name(),
				Name:          name,
			})
		}
		// Add module to modules array
		formattedName := strcase.ToCamel(name)

		modules[id-1] = module{
			Id:            id,
			Name:          name,
			FormattedName: formattedName,
			DirName:       moduleDir.Name(),
			Exercises:     exercises,
		}
	}

	homeComponent := bytes.NewBufferString("")
	exerciseRoutesComponent := bytes.NewBufferString("")
	type Data struct {
		Modules []module
	}
	data := Data{Modules: modules}
	tmpl, err := template.New("components").ParseGlob("generator/*.gotmpl")
	if err != nil {
		panic(err)
	}
	err = tmpl.ExecuteTemplate(homeComponent, "home.tsx.gotmpl", data)
	if err != nil {
		panic(err)
	}
	err = tmpl.ExecuteTemplate(exerciseRoutesComponent, "exerciseRoutes.tsx.gotmpl", data)
	if err != nil {
		panic(err)
	}

	SaveFile("src/ExerciseRoutes.tsx", exerciseRoutesComponent.Bytes())
	SaveFile("src/Home.tsx", homeComponent.Bytes())

}

func SaveFile(filePath string, content []byte) {
	f, err := os.OpenFile(filePath, os.O_RDWR|os.O_CREATE|os.O_TRUNC, 0755)
	if err != nil {
		log.Fatal(err)
	}

	_, err = f.Write(content)
	if err != nil {
		log.Fatal(err)
	}

	if err := f.Close(); err != nil {
		log.Fatal(err)
	}
}
