const express = require("express");
const router = express.Router();
const path = require("path");
const UserData = require("../models/UserData");

router.post("/", async (req, res) => {
  try {
    const userDuplicate = await UserData.find({ email: req.body.email });
    console.log(userDuplicate);
    if (userDuplicate.length === 0) {
      //User Backend Validation
      console.log("newUser");
      const userData = new UserData(req.body);
      const createdUser = await userData.save();
      console.log(createdUser);
      res.status(201);
      return res.sendFile(path.join(__dirname, "../public/src/forms.html"));
    } else {
      //Fix Backend to Front=End Form Validation
      console.log("User Exist!");
      res.status(422);
      res.sendFile(path.join(__dirname, "../public/src/index.html"));
    }
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(422);
    }
    res.status(400);
  }
});

module.exports = router;
