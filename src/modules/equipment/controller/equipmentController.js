import { equipmentModel } from "../model/equipmentModel.js"
import {v2} from "cloudinary"

export const equipmentController = {
    getEquipment: async(req, res) => {
            try {
                const equipment = await equipmentModel.find()
                if(!equipment) return res.status(404).json({status:404, message:"Equipos no encontrados exitosamente", data: null})
                 return res.status(200).json({status:200, message:"Equipos encontrados exitosamente", data: equipment})
            } catch (error) {
                console.log("error en get getEquipment: ", error)
                return res.status(500).json({status:200, message:"Error interno del servidor - revisar server logs", data:null})
            }
    },
    addEquipment: async(req, res) => {
        try {
                const equipmentReq = JSON.stringify(req.body.data)
                if(!equipmentReq) return res.status(400).json({status:400, message:"Bad request - al insertar un equipamento", data: null})
                const equipmentInserted = new equipmentModel(equipmentReq)
                equipmentInserted.isAvailable = true
                equipmentInserted.status = true
                if(req.file){
                    equipmentInserted.image = req.file.path
                    equipmentInserted.imagePublicId = req.file.filename
                }
                const equipmentSaved = await equipmentInserted.save()
                return res.status(201).json({status:201, message:"equipamento registrada exitosamente", data: equipmentSaved})
        } catch (error) {
                console.log("error en get addEquipment: ", error)
                return res.status(500).json({status:200, message:"Error interno del servidor - revisar server logs", data:null})
        }
    },
    updateEquipment: async(req, res) => {
        try {
                const id = req.params.id
                const equipmentReq = req.body
                if(!equipmentReq) return res.status(400).json({status:400, message:"Bad request - al actualizar un equipo", data: null})
                const equipmentUpdated = await equipmentModel.findByIdAndUpdate(id, equipmentReq, {new: true})
                return res.status(201).json({status:201, message:"equipo actualizada exitosamente", data: equipmentUpdated})
        } catch (error) {
                console.log("error en get patients: ", error)
                return res.status(500).json({status:200, message:"Error interno del servidor - revisar server logs", data:null})
        }
    },
    deleteEquipment: async(req, res) => {
        try {
                const id = req.params.id
                const equipmentFound = await equipmentModel.findById(id)
                if(!equipmentFound) return res.status(404).json({status:404, message:"Paciente no encontrado", data: null})
                if(requestCode.imagePublicId){
                     await v2.uploader.destroy(patientFound.imagePublicId)
                }
                const equipmentDeleted = await equipmentModel.findByIdAndDelete(id)
                return res.status(201).json({status:201, message:"equipo eliminada exitosamente", data: equipmentDeleted})
        } catch (error) {
                console.log("error en get patients: ", error)
                return res.status(500).json({status:200, message:"Error interno del servidor - revisar server logs", data:null})
         }
    }
}