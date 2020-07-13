const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionDataSchema = new Schema({
  number: { type: Number, required: true },
  axis: { type: String, required: true },
  question: { type: String, required: true },
  argument: { type: Number, required: true },
});

module.exports = mongoose.model("QuestionData", questionDataSchema);
