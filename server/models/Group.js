const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const GroupSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
    members: {
        type: Array,
        required: true,
    },
    open: {
        type: Boolean,
        required: true
    }
});

module.exports = Group = mongoose.model("group", GroupSchema);