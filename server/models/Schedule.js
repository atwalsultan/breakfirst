const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const ScheduleSchema = new Schema({
	monday: {
		type: Boolean,
		required: true,
	},
	tuesday: {
		type: Boolean,
		required: true,
	},
    wednesday: {
        type: Boolean,
        required: true
    },
	thursday: {
		type: Boolean,
		required: true,
	},
	friday: {
		type: Boolean,
		required: true,
	},
	saturday: {
		type: Boolean,
		required: true,
	},
	sunday: {
		type: Boolean,
		required: true,
	},
	userId: {
		type: String,
		required: true,
        unique:true,
	},
	from: {
		type: String,
		required: true
	},
	to: {
		type: String,
		required: true
	}
});

module.exports = Schedule = mongoose.model("schedule", ScheduleSchema);