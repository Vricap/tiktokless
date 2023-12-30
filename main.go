package main

import (
	"encoding/json"
	"io"
	"os"
	"strings"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main()  {
	err := godotenv.Load()
	if err != nil {
		panic(err)
	}

	router := gin.Default()
	router.Use(cors.Default())
	router.LoadHTMLGlob("client/*")
	router.Static("/static", "./client")

	router.GET("/", func(c *gin.Context) {
		jsonData := readData("data/tiktok.json")
		c.HTML(200, "index.html", gin.H{"Source": jsonData, "Init": jsonData[len(jsonData) - 1]})
		// c.JSON(200, jsonData)
	})

	router.POST("/add", func(c *gin.Context) {
		writeData(c)
		
		c.Redirect(301, "/")
	})

	address := os.Getenv("HOST") + os.Getenv("PORT")
	router.Run(address)
}

func readData(src string) []string {
	file, err := os.Open(src)
	if err != nil {
		panic(err)
	}
	defer file.Close()

	fileData, err := io.ReadAll(file)
	if err != nil {
		panic(err)
	}

	jsonData := make([]string, 0)
	err = json.Unmarshal(fileData, &jsonData)
	if err != nil {
		panic(err)
	}
	return jsonData
}

func embed(c *gin.Context) string {
	// this function basically take the request inputted url, and parse it to valid url embed link
	c.Request.ParseForm()
	reqUrl := strings.TrimSpace(c.Request.Form.Get("data"))
	UrlPrefix := "https://www.tiktok.com/embed"
	counter := 0
	for _, val := range reqUrl {
		if val == '/' {
			counter++
		}

		if counter == 5{
			if val == '?' {
				break
			}
			UrlPrefix += string(val)
		}
	}
	return UrlPrefix
}

func writeData(c *gin.Context)  {
	url := embed(c)
	jsonData := readData("data/tiktok.json")
	jsonData = append(jsonData, url)
	json, err := json.Marshal(jsonData)
	if err != nil {
		return
	}
	os.WriteFile("data/tiktok.json", json, os.ModePerm)
}
