require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const charityRoutes = require("./routes/charities");

//middleware
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// routes
app.use("/api/charities", charityRoutes);

app.listen(process.env.PORT, () => {
	console.log(`server running on port ${process.env.PORT} 🐙`);
});
