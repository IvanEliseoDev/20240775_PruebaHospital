import express from "express"
import { patientController } from "../controller/controllerPatients.js"

export const patientRouter = express.Router()

patientRouter.route("/").get(patientController.getPatients)