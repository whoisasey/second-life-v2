const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const charitySchema = new Schema(
	{
		charityId: { type: Number, required: true },
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);

module.exports = mongoose.model("Charity", charitySchema);
