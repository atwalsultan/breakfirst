const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const ExerciseSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = Exercise = mongoose.model("exercise", ExerciseSchema);