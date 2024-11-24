import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
const PORT = process.env.PORT || 5000;
app.use(express.json());
dotenv.config();
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
server.listen(5000, () => {
    console.log(`Server is runnning on port ${PORT}`);
});
