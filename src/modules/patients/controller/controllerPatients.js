import { patientModel } from "../models/patientModel.js"
import v2 from "cloudinary"
import bcrypt from "bcrypt"

export const patientController = {
    getPatients: async(req, res) => {
        try {
            const patients = await patientModel.find()
            if(!patients) return res.status(404).json({status:404, message:"Pacientes no encontrados exitosamente", data: null})
            return res.status(200).json({status:200, message:"Pacientes encontrados exitosamente", data: patients})
        } catch (error) {
            console.log("error en get patients: ", error)
            return res.status(500).json({status:200, message:"Error interno del servidor - revisar server logs", data:null})
        }
    },
    updatePatient: async(req, res) => {
        try {
            const id = req.params.id
            const patientFound = await patientModel.findById(id)
            if(!patientFound) return res.status(404).json({status:404, message:"Paciente no encontrado", data: null})
            const newPatient = new patientModel(req.body)
            if(req.body.password){
                 newPatient.password = await bcrypt.hash(req.params.password, 10);
            }
            if(req.file) {
                newPatient.photo = req.files.path,
                newPatient.photoPublicId = req.files.filename 
            }
            const updatedPatient = await patientModel.findByIdAndUpdate(id, newPatient , {new:true})
            return res.status(200).json({status:200, message:"Paciente actualizado exitosamente", data: updatedPatient})
        } catch (error) {
            console.log("error en get patients: ", error)
            return res.status(500).json({status:200, message:"Error interno del servidor - revisar server logs", data:null})
        }
    },
    deletePatient: async(req, res) => {
        try {
            const id = req.params.id
            const patientFound = await patientModel.findById(id)
            if(!patientFound) return res.status(404).json({status:404, message:"Paciente no encontrado", data: null})
            await v2.UploadStream.destroy(patientFound.photoPublicId)
            const deletedPatient = await patientModel.findByIdAndDelete(id)
            return res.status(204).json({status:204, message:"Paciente eliminado exitosamente", data: deletedPatient})
        } catch (error) {
            console.log("error en get patients: ", error)
            return res.status(500).json({status:200, message:"Error interno del servidor - revisar server logs", data:null})
        }
    }
}