const User = require("../models/userModel");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("B4c0//", salt);

const authenicateUser = async (req, res) => {
	const { email, password } = req.body;
	console.log("auth endpoint");
	const jwtSecretKey = process.env.JWT_TOKEN;
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

				const token = jwt.sign(loginData, jwtSecretKey);

				res.status(200).json({ message: "success", token });
			}
		});
	}
};

module.exports = { authenicateUser };
