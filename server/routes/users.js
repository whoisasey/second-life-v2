const express = require("express");
const {
	createUser,
	getUsers,
	getUser,
	deleteUser,
	updateUser,
} = require("../controllers/UserController");

const router = express.Router();

// GET ALL Users
router.get("/", getUsers);

// GET single User
router.get("/:charityId", getUser);

// POST single User
router.post("/", createUser);

// DELETE single User
router.delete("/:charityId", deleteUser);

// UPDATE single User
router.patch("/:charityId", updateUser);

module.exports = router;
