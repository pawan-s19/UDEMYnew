const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
  name: String,
  videos: [{ type: Object, default: { public_url: "", secure_url: "" } }],
});

module.exports = mongoose.model("lectureModel", lectureSchema);
