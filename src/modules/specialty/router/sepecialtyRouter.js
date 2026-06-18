import express from "express"
import { specialtyController } from "../controller/specialtyController.js"

export const specialtyRouter = express.Router()

specialtyRouter.route("/").get(specialtyController.getSpecialty).post(specialtyController.addSpecialty)

specialtyRouter.route("/:id").put(specialtyController.updateSpecialty).delete(specialtyController.deleteSpecialty)