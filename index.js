const express = require("express");
const app = express();
require("dotenv").config("/.env");
const path = require("path");

//Body-Parser Reader
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static File Setup
app.use(express.static(path.join(__dirname, "public/src")));

app.get("/", (req, res) => {
  res.status(200);
  res.sendFile("index.html");
});

//Use the postName Route
const postName = require("./routes/postName");
app.use("/sendUser", postName);

app.listen(process.env.PORT, () => {
  console.log(`Listening on PORT ${process.env.PORT}`);
});
