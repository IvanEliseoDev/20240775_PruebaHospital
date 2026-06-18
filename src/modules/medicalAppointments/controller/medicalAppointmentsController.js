import { medicalAppointmentsModel } from "../model/medicalAppointmentsModel"

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