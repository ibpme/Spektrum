const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userDataSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  place: { type: String, required: true },
  answers: { type: Array },
  results: { type: Object },
});

module.exports = mongoose.model("UserData", userDataSchema);
