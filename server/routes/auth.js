const express = require("express");

const { authenicateUser } = require("../controllers/authController");

const router = express.Router();

router.post("/auth", authenicateUser);

// router.post("/verify", "");

// router.post("/check-account", "");

module.exports = router;
