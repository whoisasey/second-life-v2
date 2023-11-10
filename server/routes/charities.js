const express = require("express");
const {
	createCharity,
	getCharities,
	getCharity,
	deleteCharity,
	updateCharity,
} = require("../controllers/charityController");

const router = express.Router();

// GET ALL charities
router.get("/", getCharities);

// GET single charity
router.get("/:charityId", getCharity);

// POST single charity
router.post("/", createCharity);

// DELETE single charity
router.delete("/:charityId", deleteCharity);

// UPDATE single charity
router.patch("/:charityId", updateCharity);

module.exports = router;
