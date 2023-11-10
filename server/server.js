require("dotenv").config({ path: "./config.env" });
const express = require("express");
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

app.listen(process.env.PORT, () => {
	console.log(`server running on port ${process.env.PORT} 🐙`);
});
