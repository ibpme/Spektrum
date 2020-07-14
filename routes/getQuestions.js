const express = require("express");
const router = express.Router();
const QuestionsData = require("../models/QuestionData");

router.get("/", (req, res) => {
  res.status(403);
  res.send("<h1>403 Forbidden</h1>");
});

router.get("/listAll", async (req, res) => {
  try {
    const allData = await QuestionsData.find();
    res.status(201).json(allData);
  } catch {
    res.status(403);
    res.send("<h1>403 Bad Request</h1>");
  }
});

router.post("/post", async (req, res) => {
  try {
    console.log(req.body);
    const questionData = new QuestionsData(req.body);
    const createdQuestion = await questionData.save();
    console.log(createdQuestion);
    res.status(201).json({
      status: "Question Created",
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
