const express = require("express");
const Charity = require("../models/charityModel");
const router = express.Router();

// GET ALL charities
router.get("/", (req, res) => {
	res.json({ msg: "GET all charities" });
});

// GET single charity
router.get("/:id", (req, res) => {
	res.json({ msg: "GET single charity" });
});

// POST single charity
router.post("/", async (req, res) => {
	const { name, charityId, email } = req.body;
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
});

// DELETE single charity
router.delete("/:id", (req, res) => {
	res.json({ msg: "DELETE charity" });
});

// UPDATE single charity
router.patch("/:id", (req, res) => {
	res.json({ msg: "UPDATE charity" });
});

module.exports = router;
