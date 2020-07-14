const express = require("express");
const router = express.Router();
const UserData = require("../models/UserData");

router.post("/", async (req, res) => {
  try {
    const userDuplicate = await UserData.find({ email: req.body.email });

    if (userDuplicate.length === 0 || userDuplicate === null) {
      res.status(201).json({
        duplicate: false,
      });
    } else {
      res.status(422).json({
        duplicate: true,
        userResult: userDuplicate[0].results,
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
