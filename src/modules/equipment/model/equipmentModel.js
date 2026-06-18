import { model, Schema } from "mongoose";


const equipmentSchema = new Schema({
    equipmentName:{
        type:String
    },
    description:{
        type:String
    },
    brand:{
        type:String
    },
    model:{
        type:String
    },
    pucharseDate:{
        type: String
    },
    maintenaceDate:{
        type:String
    },
    condition:{
        type:String
    },
    image:{
        type:String
    },
    imagePublicId:{
        type:String
    },
    status:{
        type:Boolean
    },
    isAvailable:{
        type:Boolean
    }
}, {timestamps: true})

export const equipmentModel = model("equipment", equipmentSchema)