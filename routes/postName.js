const express = require("express");
const router = express.Router();
const path = require("path");

router.post("/", (req, res) => {
  //Verify that identity in the Database
  res.sendFile(path.join(__dirname, "../public/src/forms.html"));
});

module.exports = router;
