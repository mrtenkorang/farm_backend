const mongoose = require("mongoose");



const farmSchema = mongoose.Schema({
    farmID: {
        type: String,
        required: [true, "farm ID is required"]
    },
    farmer: {
        type: String,
        required: [true, "farmer is required"]
    },
    farmLocation: {
        type: String,
        required: [true, "farm location is required"]
    },
    farmBoundary: {
        type: String,
        required: [true, "farm boundary is required"]
    },
    farmArea: {
        type: Number,
        required: [true, "farm area is required"]
    },
    geom: {
        type: {
            type: String,
            enum: ['Polygon'],
            required: false
        },
        coordinates: {
            type: [[Number]],
            required: false
        }
    }
});

const Farm = mongoose.model("Farm", farmSchema);
module.exports = {Farm}