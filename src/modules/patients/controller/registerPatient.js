import { patientModel } from "../models/patientModel"
import crypto from "crypto"
import bcrypt from "bcrypt"

export const registerPatientController = [{
    
    addPatient: async(req, res) => {
        try {
            const patientReq = req.body
            if(!patientReq) return res.status(400).json({status:400, message:"Bad request patient", data:null})
            const existPatient = await patientModel.findOne({email: patientReq.email})
            if(existPatient) return res.statu(400).json({status:400, message:"Paciente ya registrado", data:null})
            const passwordHashed = await bcrypt.hash(patientReq.password, 10)
            const verificationCode = await crypto.randomBytes(3).toString("Hex")
        } catch (error) {
            console.log("error en add patients: ", error)
            return res.status(500).json({status:200, message:"Error interno del servidor - revisar server logs", data:null})
        }
    }
}]