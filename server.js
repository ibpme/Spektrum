const express = require("express");
const app = express();
require("dotenv").config("/.env");
const path = require("path");

// //Disable CORS
const cors = require("cors");
app.use(cors());

//Connection to Database
const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/spektrum";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once("open", (_) => {
  console.log("Database Connected to:", url);
});
db.on("error", (err) => {
  console.error("Connection Error:", err);
});

//Body-Parser Reader
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static File Setup
app.use(express.static(path.join(__dirname, "public/src")));

//Display index file
app.get("/", (req, res) => {
  res.sendFile("index.html");
  res.status(200);
});

//Use the postUser Route
const postUser = require("./routes/postUser");
app.use("/api/postUser", postUser);
//User the checkUser Route
const checkUser = require("./routes/checkUser");
app.use("/api/checkUser", checkUser);
//Use the getQuestionRoute
const getQuestions = require("./routes/getQuestions");
app.use("/api/getQuestions", getQuestions);
//Use the postForm route
const postForm = require("./routes/postForm");
app.use("./api/postForm", postForm);

app.listen(process.env.PORT, () => {
  console.log(`Listening on PORT ${process.env.PORT}`);
});
