package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"strconv"
	"strings"
)

func parseFilename(fileName string) (int, string) {
	fragments := strings.SplitN(fileName, "-", 2)

	id, err := strconv.Atoi(fragments[0])
	if err != nil {
		panic(fmt.Errorf("failed to parse module id: %w", err))
	}
	return id, fragments[1]
}

func main() {
	command := os.Args[1]
	if command != "add" && command != "remove" {
		panic("command not recognized, use add or remove.")
	}

	startIndex, err := strconv.ParseInt(os.Args[2], 10, 64)

	dirs, err := ioutil.ReadDir(".")
	if err != nil {
		panic(err)
	}

	var offset int
	if command == "add" {
		offset = 1
	} else if command == "remove" {
		offset = -1
	}

	for _, file := range dirs {
		if !file.IsDir() {
			continue
		}

		id, name := parseFilename(file.Name())
		if id < int(startIndex) {
			continue
		}

		newName := fmt.Sprintf("%02d-%s", id+offset, name)
		fmt.Println("renamed", file.Name(), "to", newName)
		if err := os.Rename(file.Name(), newName); err != nil {
			panic(err)
		}
	}
}
