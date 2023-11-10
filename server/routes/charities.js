const express = require("express");

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
router.post("/", (req, res) => {
	res.json({ msg: "POST charity" });
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
