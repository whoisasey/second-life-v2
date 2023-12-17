const User = require("../models/userModel");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const salt = bcrypt.genSaltSync(10);

const jwtSecretKey = process.env.JWT_TOKEN;
let token = "";

const authenicateUser = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email: email });

	if (user) {
		bcrypt.compare(password, user.password, (err, result) => {
			if (!result) {
				return res.status(401).json({ message: "Invalid Password" });
			} else {
				let loginData = {
					email,
					signInTime: Date.now(),
				};

				token = jwt.sign(loginData, jwtSecretKey);

				res.status(200).json({ message: "success", token });
			}
		});
	}
};

const verifyUser = (req, res) => {
	try {
		const verified = jwt.verify(token, jwtSecretKey);
		if (verified) {
			return res.status(200).json({ status: "logged in", message: "success" });
		} else {
			// access denied
			return res.status(401).json({ status: "invalid login", message: e });
		}
		return;
	} catch (e) {
		// access denied
		return res.status(401).json({ status: "invalid auth", message: e });
	}
};

const checkUserAcc = async (req, res) => {
	const { email } = req.body;

	const user = await User.findOne({ email: email });

	if (user) {
		res.status(200).json({
			status: user.email !== undefined ? "User exists" : "User does not exist",
			userExists: user.email !== undefined,
		});
	}
};

module.exports = { authenicateUser, verifyUser, checkUserAcc };
