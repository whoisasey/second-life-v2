require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const charityRoutes = require("./routes/charities");
const userRoutes = require("./routes/users");
// express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// routes
app.use("/api/charities", charityRoutes);
app.use("/api/users", userRoutes);

// connect to DB
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		// listen for requests
		app.listen(process.env.PORT, () => {
			console.log(`Connected to DB & Listening on port ${process.env.PORT} 🐙`);
		});
	})
	.catch((e) => console.log(e));
