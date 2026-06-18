import { specialtyModel } from "../model/specialtyModel.js"

export const specialtyController = {
    getSpecialty: async(req, res) => {
        try {
            const specialty = await specialtyModel.find()
            if(!specialty) return res.status(404).json({status:404, message:"Especialidades no encontrados exitosamente", data: null})
             return res.status(200).json({status:200, message:"Especialidades encontrados exitosamente", data: patients})
        } catch (error) {
            console.log("error en get getSpecialty: ", error)
            return res.status(500).json({status:200, message:"Error interno del servidor - revisar server logs", data:null})
        }
    },
    addSpecialty: async(req, res) => {
         try {
            const specialtyReq = req.body
            if(!specialtyReq) return res.status(400).json({status:400, message:"Bad request - al insertar una especialidad", data: null})
            const specialtyInserted = new specialtyModel(specialtyReq)
            specialtyInserted.isAvailable= true
            const specialtySaved = await specialtyInserted.save()
            return res.status(201).json({status:201, message:"Especialidad registrada exitosamente", data: specialtySaved})
        } catch (error) {
            console.log("error en get patients: ", error)
            return res.status(500).json({status:200, message:"Error interno del servidor - revisar server logs", data:null})
        }
    },
    updateSpecialty: async(req, res) => {
         try {
            const id = req.params.id
            const specialtyReq = req.body
            if(!specialtyReq) return res.status(400).json({status:400, message:"Bad request - al insertar una especialidad", data: null})
            const specialtyUpdated = await specialtyModel.findByIdAndUpdate(id, specialtyReq, {new: true})
            return res.status(201).json({status:201, message:"Especialidad actualizada exitosamente", data: specialtyUpdated})
        } catch (error) {
            console.log("error en get patients: ", error)
            return res.status(500).json({status:200, message:"Error interno del servidor - revisar server logs", data:null})
        }
    },
    deleteSpecialty: async(req, res) => {
         try {
            const id = req.params.id
            const specialtyDeleted = await specialtyModel.findByIdAndDelete(id)
            return res.status(201).json({status:201, message:"Especialidad eliminada exitosamente", data: specialtyDeleted})
        } catch (error) {
            console.log("error en get patients: ", error)
            return res.status(500).json({status:200, message:"Error interno del servidor - revisar server logs", data:null})
        }
    }
}