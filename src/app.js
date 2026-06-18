import express from "express"
import { patientRouter } from "./modules/patients/router/patientRouter.js"
import cookieParser from "cookie-parser"

export const app = express()

app.use(cookieParser())
app.use(express.json())

app.use("patients", patientRouter)