const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const TestSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
    description: {
        type: String,
        required: true,
    }
});

module.exports = Test = mongoose.model("test", TestSchema);