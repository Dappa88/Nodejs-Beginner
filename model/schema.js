const mongoose = require("mongoose")

const hospital_patient = new mongoose.Schema({
    first_name:{
        type: String,
        required: [true,"name is required"]
    },

    last_name:{
        type: String,
        required: [true,"name is required"]

    },

    card_no:{
        type: Number,
        unique:true,
        trim:true,
        required: [true,"name is required"]
        

    },
    doctor_assigned:{
        type: String,
        required: [true,"name is required"]
    },
    nurse_assigned:{
        type: String,
        trim:true,
        required: [true,"this is required"]
    },
    diagnosis:{
        type: String,
        trim:true,
        required: [true,"this is required"]
    },
    next_of_kin:{
        type: String,
        trim:true,
        required: [true,"this is required"]
    },
    next_of_kin:{
        type: String,
        trim:true,
        required: [true,"this is required"]
    }

})

const hospial_patients = mongoose.model("hospial_patients",hospital_patient)

module.exports = hospial_patients

