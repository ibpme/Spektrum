const express = require("express");
const router = express.Router();
const path = require("path");
const UserData = require("../models/UserData");

router.post("/", async (req, res) => {
  try {
    const userData = new UserData(req.body);
    const createdUser = await userData.save();
    console.log(createdUser);
    res.status(201).json({
      status: "User Created",
      created: true,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(422).json({
        status: "Validation Error",
        created: false,
      });
    }
    res.status(400);
  }
});

module.exports = router;
