const express = require("express")
const server = express()

server.use(express.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})

server.get("/", (req, res) => {
  return res.sendFile("index.html", { title: "Cadastre um ponto de coleta" })
})

server.get("/create-point", (req, res) => {
  return res.sendFile("create-point.html")
})

server.get("/search", (req, res) => {
  return res.sendFile("search-results.html")
})

server.listen(3000)