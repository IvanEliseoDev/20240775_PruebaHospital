import mongoose, { model, Schema } from "mongoose";

export const recordSchema = new Schema({
    patient_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "patients"
    },
    diagnosis:{
        type: String
    },
    medications:[{
        medicineName:{
            type:String
        }
    }],
    medicalNotes:{
        type:String
    }
}, {timestamps: true})

export const recordModel = model("records", recordSchema)