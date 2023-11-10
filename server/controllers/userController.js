const User = require("../models/userModel");
const mongoose = require("mongoose");

//  get all users
const getUsers = async (req, res) => {
	const users = await User.find({}).sort({ createdAt: -1 });

	res.status(200).json(users);
};

// get single user
const getUser = async (req, res, next) => {
	const { charityId } = req.params;

	// if the _id (Object) is passed, not valid
	if (mongoose.Types.ObjectId.isValid(charityId)) {
		return res.status(404).json({ error: "No User found" });
	}

	// find by charityId
	const user = await User.findOne({ charityId: charityId });

	if (!user) {
		return res.status(404).json({ error: "No User found" });
	}

	return res.status(200).json(user);
};

// create new user
const createUser = async (req, res) => {
	const { email, password, charityId } = req.body;

	// add doc to DB
	try {
		const user = await User.create({
			email,
			password,
			charityId,
		});
		res.status(200).json(user);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
// delete user
const deleteUser = async (req, res) => {
	const { userId } = req.params;

	// if the _id (Object) is passed, not valid
	if (mongoose.Types.ObjectId.isValid(userId)) {
		return res.status(404).json({ error: "No User found" });
	}

	// find by userId
	const user = await User.findOneAndDelete({ userId: userId });

	if (!user) {
		return res.status(404).json({ error: "No User found" });
	}

	return res.status(200).json(user);
};

// update user
const updateUser = async (req, res) => {
	const { userId } = req.params;

	// if the _id (Object) is passed, not valid
	if (mongoose.Types.ObjectId.isValid(userId)) {
		return res.status(404).json({ error: "No User found" });
	}

	const user = await User.findOneAndUpdate(
		{ userId: userId },
		{
			...req.body,
		},
	);

	if (!user) {
		return res.status(404).json({ error: "No User found" });
	}

	return res.status(200).json(user);
};

module.exports = {
	createUser,
	getUsers,
	getUser,
	deleteUser,
	updateUser,
};
