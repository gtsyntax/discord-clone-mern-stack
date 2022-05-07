import express from "express"
import http from "http"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import indexRouter from "./routers/index.js"
import authRouter from "./routers/auth.js"

// dotenv
dotenv.config()

const app = express()

// middlewares
app.use(bodyParser.json())
app.use(cors())

// routers
app.use("/", indexRouter)
app.use("/api/auth", authRouter)

const PORT = process.env.PORT || process.env.API_PORT
const server = http.createServer(app)


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    server.listen(PORT, () => {
        console.log(`Server listening on 127.0.0.1:${PORT}`)
    })
})
.catch(err => console.error(err))