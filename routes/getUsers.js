const express = require("express");
const router = express.Router();
const path = require("path");
const UserData = require("../models/UserData");

router.get("/", async (req, res) => {
  res.status(403);
  res.send("<h1>403 Forbidden</h1>");
});

router.get("/listAll", async (req, res) => {
  if (req.body.length === 0) {
    const allData = await UserData.find();
    res.status(201);
    res.json(allData);
  } else {
    res.status(403);
    res.send("<h1>403 Bad Request</h1>");
  }
});

module.exports = router;
