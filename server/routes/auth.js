const express = require("express");

const {
	authenicateUser,
	verifyUser,
	checkUserAcc,
} = require("../controllers/authController");

const router = express.Router();

router.post("/auth", authenicateUser);

router.post("/verify", verifyUser);

router.post("/check-account", checkUserAcc);

module.exports = router;
