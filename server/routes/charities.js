const express = require("express");
const {
	createCharity,
	getCharities,
	getCharity,
} = require("../controllers/charityController");

const router = express.Router();

// GET ALL charities
router.get("/", getCharities);

// GET single charity
router.get("/:charityId", getCharity);

// POST single charity
router.post("/", createCharity);

// DELETE single charity
router.delete("/:id", (req, res) => {
	res.json({ msg: "DELETE charity" });
});

// UPDATE single charity
router.patch("/:id", (req, res) => {
	res.json({ msg: "UPDATE charity" });
});

module.exports = router;
