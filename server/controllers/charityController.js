const Charity = require("../models/charityModel");
const mongoose = require("mongoose");

//  get all charities
const getCharities = async (req, res) => {
	const charities = await Charity.find({}).sort({ createdAt: -1 });
	res.status(200).json(charities);
};

// get single charity
const getCharity = async (req, res, next) => {
	const { charityId } = req.params;

	// if the _id (Object) is passed, not valid
	if (mongoose.Types.ObjectId.isValid(charityId)) {
		return res.status(404).json({ error: "No Charity found" });
	}

	// find by charityId
	const charity = await Charity.findOne({ charityId: charityId });

	if (!charity) {
		return res.status(404).json({ error: "No Charity found" });
	}

	return res.status(200).json(charity);
};

// create new charity
const createCharity = async (req, res) => {
	const { name, charityId, email } = req.body;

	// add doc to DB
	try {
		const charity = await Charity.create({
			name,
			charityId,
			email,
		});
		res.status(200).json(charity);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
// delete charity
const deleteCharity = async (req, res) => {
	const { charityId } = req.params;
	// if the _id (Object) is passed, not valid
	if (mongoose.Types.ObjectId.isValid(charityId)) {
		return res.status(404).json({ error: "No Charity found" });
	}

	// find by charityId
	const charity = await Charity.findOneAndDelete({ charityId: charityId });

	if (!charity) {
		return res.status(404).json({ error: "No Charity found" });
	}

	return res.status(200).json({ message: "Charity Successfully Deleted" });
};

// update charity
const updateCharity = async (req, res) => {
	const { charityId } = req.params;

	// if the _id (Object) is passed, not valid
	if (mongoose.Types.ObjectId.isValid(charityId)) {
		return res.status(404).json({ error: "No Charity found" });
	}

	const charity = await Charity.findOneAndUpdate(
		{ charityId: charityId },
		{
			...req.body,
		},
	);

	if (!charity) {
		return res.status(404).json({ error: "No Charity found" });
	}

	return res.status(200).json(charity);
};

module.exports = {
	createCharity,
	getCharities,
	getCharity,
	deleteCharity,
	updateCharity,
};
