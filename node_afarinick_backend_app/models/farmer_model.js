const mongoose = require("mongoose")

const farmerSChema = mongoose.Schema({
    farmerFirstName:{
        type: String,
        required: [true, "farmer name is required"]
    },
    farmerLastName:{
        type: String,
        required: [true, "farmer name is required"]
    },
    farmerIDType:{
        type: String,
        required: [true, "farmer id type is required"]
    },
    farmerIDNumber:{
        type: Number,
        required: [true, "farmer id number is required"]
    },
    farmerTelephone: {
        type: Number,
        required: [true, "farmer telephone is required"]
    },
    
})

const Farmer = mongoose.model("Farmer", farmerSChema);
module.exports = {Farmer}