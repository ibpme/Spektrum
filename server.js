const express = require("express");
const app = express();
const path = require("path");
const config = require("./config/config");
// //Disable CORS
const cors = require("cors");
app.use(cors());

const { PORT, MONGO_URI, MONGO_DB_NAME } = config;

//Connection to Database
const mongoose = require("mongoose");
const url = `${MONGO_URI}${MONGO_DB_NAME}`;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once("open", (_) => {
  console.log("Database Connected to:", url);
});
db.on("error", (err) => {
  console.error("Connection Error:", err);
});
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });
//Body-Parser Reader
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
app.use("/api/postForm", postForm);

app.get("/portNumberServer", (res, req) => {
  res.send(`SERVER PORT: ${PORT}`);
});

//Static File Setup
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(process.env.PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
