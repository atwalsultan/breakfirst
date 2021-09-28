const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const BottleSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
}, {timestamps: true, versionKey: 'version'});

module.exports = Bottle = mongoose.model("bottle", BottleSchema);