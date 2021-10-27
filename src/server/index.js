const path = require("path");
require("dotenv").config(); // for environment variables
const cors = require("cors"); //cors to avoid cors-origin issue
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const bodyParser = require("body-parser"); //parser
const axios = require("axios").default; // axios to deal with node server

//choosing whatever port we want.
const PORT = 8081;
// initializing app with express
const app = express();
//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
//choosing a static root
app.use(express.static("dist"));

app.use(express.json());

app.get("/", function (req, res) {
	// choosing which file inside the distribution folder to target
	res.sendFile(path.resolve("dist/index.html"));
});

//Destructuring the environment variables
const { MEANING_CLOUD_API_KEY, BASE_API_URL } = process.env;

// These keys are being left in purpose for simplifying the running process
console.log("Please use these key variables inside .env in your root dir if you don't have them.");
console.log('MEANING_CLOUD_API_KEY=55bd733e899882529af33d85e89d1c1c')
console.log('BASE_API_URL=https://api.meaningcloud.com/sentiment-2.1')

// A function to use with posting.
const apiPost = async (req, res) => {
	const {
		body: { url },
	} = req;
	const apiUrl = `${BASE_API_URL}?key=${MEANING_CLOUD_API_KEY}&url=${url}&lang=en`;
	const response = await axios.post(apiUrl);
	const result = response.data;
	res.send(result);
};
// POST
app.post("/apiPost", apiPost);
// GET
app.get("/test", function (req, res) {
	res.send(mockAPIResponse);
});

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
	if (error) throw new Error(error);
	console.log(`Server listening on port ${PORT}!`);
});

// export app to use it in the unit testing
module.exports = { app };
