const express = require("express");
const router = express.Router();
const UserData = require("../models/UserData");

router.post("/", async (req, res) => {
  const UserId = req.body.userId;
  const formAnswer = req.body.data;
  try {
    const userData = await UserData.find({ _id: UserId });
    userData.answers = formAnswer;
    const createdData = await userData.save();
    //Create a functional backend algorithm here
    res.status(201).json({
      status: true,
      data: {
        x: 12,
        y: 12,
      },
    });
  } catch {
    (err) => {
      console.log(err);
      res.status(404).json({
        status: false,
        data: null,
      });
    };
  }
});

module.exports = router;
