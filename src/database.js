import mongoose from "mongoose";
import { config } from "./config/config.js";

mongoose.connect(config.db.URI)
export const connection = mongoose.connection

connection.once("open", () => {
    console.log("DB is connected")
})

connection.on("disconnected", () => {
    console.log("DB is disconnected")
})