const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		charityId: { type: Number, required: true },
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);

const db = mongoose.connection.useDb("charities");

module.exports = db.model("CharityAdmin", userSchema);
