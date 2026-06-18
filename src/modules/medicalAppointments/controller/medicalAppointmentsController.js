import { medicalAppointmentsModel } from "../model/medicalAppointmentsModel.js"

export const medicalAppointmentsController = {
    getAllMedicalsAppointments: async(req, res) => {
        try {
            const medicalAppointments = await medicalAppointmentsModel.find()
            if(!medicalAppointments) return res.status(404).json({status:404, message:"no se encotraron sitas medicas", data:null})
            return res.status(200).json({status:200, message:"citas medicas encontradas exitosamente", data:medicalAppointments})
        } catch (error) {
            console.log("error en get getAllMedicalsAppointments: ", error)
            return res.status(500).json({status:500, message:"Error interno del servidor - revisar server logs", data:null})
        }
    },
    addMedicalsAppointments: async(req, res) => {
             try {
                const medicalAppointmentsReq = req.body
                if(!medicalAppointmentsReq) return res.status(400).json({status:400, message:"Bad request - al insertar una cita medica", data: null})
                const medicalAppointmentsInsert = new medicalAppointmentsModel(medicalAppointmentsReq)
                medicalAppointmentsInsert.status= true
                const medicalAppointmetnsSave = await medicalAppointmentsInsert.save()
                return res.status(201).json({status:201, message:"Cita medica registrada exitosamente", data: medicalAppointmetnsSave})
            } catch (error) {
                console.log("error en get patients: ", error)
                return res.status(500).json({status:200, message:"Error interno del servidor - revisar server logs", data:null})
            }
    },
    updateMedicalsAppointments: async(req, res) => {
             try {
                const id = req.params.id
                const medicalAppointmentsReq = req.body
                if(!medicalAppointmentsReq) return res.status(400).json({status:400, message:"Bad request - al actualizar una cita medica", data: null})
                const medicalAppointmentsUpdated = await medicalAppointmentsModel.findByIdAndUpdate(id, medicalAppointmentsReq, {new: true})
                return res.status(201).json({status:201, message:"cita medica actualizada exitosamente", data: medicalAppointmentsUpdated})
            } catch (error) {
                console.log("error en get updateSpecialty: ", error)
                return res.status(500).json({status:200, message:"Error interno del servidor - revisar server logs", data:null})
            }
        },
    deleteMedicalsAppointments: async(req, res) => {
             try {
                const id = req.params.id
                const medicalAppointmentsDeleted = await medicalAppointmentsModel.findByIdAndDelete(id)
                return res.status(201).json({status:201, message:"Cita medica eliminada exitosamente", data: medicalAppointmentsDeleted})
            } catch (error) {
                console.log("error en get deleteSpecialty: ", error)
                return res.status(500).json({status:200, message:"Error interno del servidor - revisar server logs", data:null})
            }
    }
}