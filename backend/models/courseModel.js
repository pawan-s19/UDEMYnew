const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  titleMain: {
    type: String,

    maxLength: [22, "title cannot exceed 15 characters"],
  },
  title: {
    type: String,

    maxLength: [22, "title cannot exceed 15 characters"],
  },
  subtitle: {
    type: String,

    maxLength: [15, "title cannot exceed 15 characters"],
  },
  courseDescription: {
    type: String,
  },
  language: String,
  difficulty: String,
  category: String,
  subCategory: String,
  primaryGoal: {
    type: String,
    maxLength: [20, "should not exceed 10 characters"],
  },
  image: {
    type: Object,
    default: {
      public_url: "",
      url: "",
    },
  },
  video: {
    type: String,
    default: "lavda",
  },
  aim: Array,
  preRequisites: Array,
  targetAudience: Array,
  sections: [{ type: mongoose.Schema.Types.ObjectId, ref: "sectionModel" }],
});

module.exports = mongoose.model("courseModel", courseSchema);
