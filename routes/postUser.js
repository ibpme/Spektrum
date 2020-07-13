const express = require("express");
const router = express.Router();
const path = require("path");
const UserData = require("../models/UserData");

router.post("/", async (req, res) => {
  try {
    const userData = new UserData(req.body);
    const createdUser = await userData.save();
    res.status(201).json({
      status: "User Created",
      userId: createdUser._id,
      created: true,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(422).json({
        status: "Validation Error",
        created: false,
      });
    } else {
      res.status(400);
    }
  }
});

module.exports = router;
