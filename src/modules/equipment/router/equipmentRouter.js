import express from "express"
import { equipmentController } from "../controller/equipmentController.js"

export const equipmentRouter = express.Router()

equipmentRouter.route("/").get(equipmentController.getEquipment).post(equipmentController.addEquipment)
equipmentRouter.route("/:id").put(equipmentController.updateEquipment).delete(equipmentController.deleteEquipment)