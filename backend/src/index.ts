import express from "express"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { app, server } from "./socket/socket.js"
import path from "path"

const PORT= process.env.PORT || 5000
const __dirname=path.resolve()

app.use(express.json())
dotenv.config()
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)

if(process.env.NODE_ENV !== "development"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")))
    app.get("*",(_,res)=>{
        res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
    })
}

server.listen(5000,()=>{
    console.log(`Server is runnning on port ${PORT}`)
})