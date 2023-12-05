const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { isEmail } = require("validator");
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		charityId: { type: String, required: true },
		name: { type: String, required: true },
		email: {
			type: String,
			unique: true,
			lowercase: true,
			required: [true, "Please enter an email"],
			validate: [isEmail, "Please enter a valid email"],
		},
		password: {
			type: String,
			required: [true, "Please enter a password"],
		},
	},
	{ timestamps: true },
);

// fire a function ebfore doc saved to db
userSchema.pre("save", async function (next) {
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

const db = mongoose.connection.useDb("charities");

module.exports = db.model("CharityAdmin", userSchema);
