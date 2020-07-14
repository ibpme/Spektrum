const express = require("express");
const router = express.Router();
const UserData = require("../models/UserData");
const QuestionData = require("../models/QuestionData");

router.post("/", async (req, res) => {
  const UserId = req.body.userId;
  const formAnswer = req.body.data;
  try {
    let xValue = 0;
    let yValue = 0;
    const userData = await UserData.findOne({ _id: UserId });
    userData.answers = formAnswer;
    for (let data of formAnswer) {
      const associateQuestion = await QuestionData.findOne({ _id: data.id });
      if (associateQuestion.axis === "x") {
        xValue += (data.answer - 2) * associateQuestion.argument;
      } else if (associateQuestion.axis === "y") {
        yValue += (data.answer - 2) * associateQuestion.argument;
      }
      userData.results = {
        x: xValue,
        y: yValue,
      };
    }
    await userData.save(function (err) {
      console.error(err);
    });
    res.status(201).json({
      status: true,
      data: {
        x: xValue,
        y: yValue,
      },
    });
  } catch {
    (err) => {
      console.error(err);
      res.status(404).json({
        status: false,
        data: null,
      });
    };
  }
});

module.exports = router;
