const express = require("express");
const router = express.Router();
const path = require("path");
const UserData = require("../models/UserData");

router.post("/", async (req, res) => {
  try {
    //Could be CORS issue
    console.log(req.body);
    const userDuplicate = await UserData.find({ email: req.body.email });
    console.log(userDuplicate);
    if (userDuplicate.length === 0) {
      console.log("newUser");
      res.status(201).json({
        duplicate: false,
      });
    } else {
      console.log("User Exist!");
      res.status(422).json({
        duplicate: true,
      });
    }
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(422);
    }
    res.status(400);
  }
});

module.exports = router;
