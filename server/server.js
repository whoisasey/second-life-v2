require("dotenv").config({ path: "./config.env" });
const express = require("express");
const mongoose = require("mongoose");
const charityRoutes = require("./routes/charities");

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

// connect to DB
mongoose
	.connect(process.env.CHARITY_MONGO_URI)
	.then(() => {
		// listen for requests
		app.listen(process.env.PORT, () => {
			console.log(`Connected to DB & Listening on port ${process.env.PORT} 🐙`);
		});
	})
	.catch((e) => console.log(e));
