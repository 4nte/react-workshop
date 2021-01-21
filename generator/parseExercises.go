package main

import (
	"fmt"
	"github.com/stoewer/go-strcase"
	"io/ioutil"
	"os"
	"strconv"
	"strings"
)

type module struct {
	Id        int
	Name      string
	Exercises []exercise
}

type exercise struct {
	Id   int
	Name string
}

func main() {

	files, err := ioutil.ReadDir("src/modules")
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

		fragments := strings.SplitN(moduleDir.Name(), "-", 2)

		fmt.Println("fragments", fragments)
		id, err := strconv.Atoi(fragments[0])
		if err != nil {
			panic(fmt.Errorf("failed to parse module id: %w", err))
		}

		// Add module to modules array
		modules[id-1] = module{
			Id:        id,
			Name:      fragments[1],
			Exercises: []exercise{},
		}
	}

	fmt.Println("modules", modules)
}

const ExerciseRoutesTemplate = `

`

func generateExerciseRoutesComponent() {

}
