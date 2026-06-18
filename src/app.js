import express from "express"
import cors from "cors"
import { patientRouter } from "./modules/patients/router/patientRouter.js"

export const app = express()

app.use(cors())
app.use(cookieParser)
app.use(express.json())

app.use("patients", patientRouter)