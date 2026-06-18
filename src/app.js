import express from "express"
import { patientRouter } from "./modules/patients/router/patientRouter.js"
import cookieParser from "cookie-parser"
import { medicalAppointmentsRouter } from "./modules/medicalAppointments/router/medicalAppointmentsRouter.js"
import { equipmentRouter } from "./modules/equipment/router/equipmentRouter.js"
import { specialtyRouter } from "./modules/specialty/router/sepecialtyRouter.js"
import { recordsRouter } from "./modules/records/router/recordsRouter.js"

export const app = express()

app.use(cookieParser())
app.use(express.json())

app.use("/patients", patientRouter)
app.use("/specialty", specialtyRouter)
app.use("/medicalAppointments", medicalAppointmentsRouter)
app.use("/equipment", equipmentRouter)
app.use("/records", recordsRouter)