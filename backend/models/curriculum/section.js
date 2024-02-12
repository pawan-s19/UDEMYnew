const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  name: String,
  lectures: [{ type: mongoose.Schema.Types.ObjectId, ref: "lectureModel" }],
});

module.exports = mongoose.model("sectionModel", sectionSchema);
