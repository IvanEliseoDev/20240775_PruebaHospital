import express from "express"
import { medicalAppointmentsController } from "../controller/medicalAppointmentsController.js"

export const medicalAppointmentsRouter = express.Router()

medicalAppointmentsRouter.route("/").get(medicalAppointmentsController.getAllMedicalsAppointments).post(medicalAppointmentsController.addMedicalsAppointments)

medicalAppointmentsRouter.route("/:id").put(medicalAppointmentsController.updateMedicalsAppointments).delete(medicalAppointmentsController.deleteMedicalsAppointments)