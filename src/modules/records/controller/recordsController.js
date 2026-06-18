import { recordModel } from "../models/recordsModel.js"

export const recordsController = {
    getRecords: async(req, res) => {
            try {
                const records = await recordModel.find()
                if(!records) return res.status(404).json({status:404, message:"Expedientes clinicos no encontrados exitosamente", data: null})
                 return res.status(200).json({status:200, message:"Expedientes clinicos  encontrados exitosamente", data: records})
            } catch (error) {
                console.log("error en get getRecords: ", error)
                return res.status(500).json({status:200, message:"Error interno del servidor - revisar server logs", data:null})
            }
    },
    addRecords: async(req, res) => {
        try {
                const recordsReq = req.body
                if(!recordsReq) return res.status(400).json({status:400, message:"Bad request - al insertar un expediente clinico", data: null})
                const recordsInserted = new recordModel(recordsReq)
                const recordsSaved = await recordsInserted.save()
                return res.status(201).json({status:201, message:"Expediente clinico registrada exitosamente", data: recordsSaved})
        } catch (error) {
                console.log("error en get addRecords: ", error)
                return res.status(500).json({status:200, message:"Error interno del servidor - revisar server logs", data:null})
        }
    },
    updateRecords: async(req, res) => {
        try {
                const id = req.params.id
                const recordsReq = req.body
                if(!recordsReq) return res.status(400).json({status:400, message:"Bad request - al actualizar un expediente clinico", data: null})
                const recordsUpdated = await recordModel.findByIdAndUpdate(id, recordsReq, {new: true})
                return res.status(201).json({status:201, message:"expediente clinico actualizada exitosamente", data: recordsUpdated})
        } catch (error) {
                console.log("error en get updateRecords: ", error)
                return res.status(500).json({status:200, message:"Error interno del servidor - revisar server logs", data:null})
        }
    },
    deleteRecords: async(req, res) => {
        try {
                const id = req.params.id
                const recordsDeleted = await recordModel.findByIdAndDelete(id)
                return res.status(201).json({status:201, message:"expediente clinico eliminada exitosamente", data: recordsDeleted})
        } catch (error) {
                console.log("error en get deleteRecords: ", error)
                return res.status(500).json({status:200, message:"Error interno del servidor - revisar server logs", data:null})
         }
    }
}