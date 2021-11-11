const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const RoutineSchema = new Schema({
	userId: {
		type: String,
		required: true,
	},
	from: {
		type: String,
		required: true
	},
	to: {
		type: String,
		required: true
	},
    interval: {
        type: Number,
        required: true,
    },
    silentMode: {
        type: Boolean,
        required: true,
    },
    saveForNextTime: {
        type: Boolean,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    sound: {
        type: Boolean,
        required: true
    }
});

module.exports = Routine = mongoose.model("routine", RoutineSchema);