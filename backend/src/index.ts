import express from "express"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
dotenv.config()
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)


app.listen(5000,()=>{
    console.log("Server is runnning on port 5000")
})