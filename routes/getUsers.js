const express = require("express");
const router = express.Router();
const UserData = require("../models/UserData");

router.get("/", (req, res) => {
  res.status(403);
  res.send("<h1>403 Forbidden</h1>");
});

router.get("/listAll", async (req, res) => {
  try {
    const allData = await UserData.find();
    res.status(201);
    res.json(allData);
  } catch {
    res.status(403);
    res.send("<h1>403 Bad Request</h1>");
  }
});

module.exports = router;
