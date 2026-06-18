import express from "express"
import { recordsController } from "../controller/recordsController.js"

export const recordsRouter = express.Router()

recordsRouter.route("/").get(recordsController.getRecords).post(recordsController.addRecords)

recordsRouter.route("/:id").put(recordsController.updateRecords).delete(recordsController.deleteRecords)