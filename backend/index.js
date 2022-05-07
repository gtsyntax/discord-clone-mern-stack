import express from "express"
import http from "http"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"

const app = express()

// middlewares
app.use(bodyParser.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello World")
})


const PORT = process.env.PORT || 3000
const server = http.createServer(app)
server.listen(PORT, () => {
    console.log(`Server listening on 127.0.0.1:${PORT}`)
})