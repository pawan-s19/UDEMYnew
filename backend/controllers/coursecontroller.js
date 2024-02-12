const courseSchema = require("../models/courseModel");
const sectionSchema = require("../models/curriculum/section");
const cloudinary = require("cloudinary");
exports.createCourse = async (req, res, next) => {
  console.log(req.body);
  try {
    const myCloud = await cloudinary.v2.uploader.upload(req.body.image, {
      folder: "courseImage",
      width: 150,
      crop: "scale",
    });

    let createdCourse = await courseSchema.create({
      ...req.body,
      image: {
        public_url: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });

    res.status(201).json(createdCourse);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAllCourses = async (req, res, next) => {
  try {
    let allCourses = await courseSchema.find({});
    res.status(201).json(allCourses);
  } catch (err) {
    res.status(500).json(err);
  }
};

//curriculum controllers

exports.createSection = async (req, res) => {
  try {
    let createdSection = await sectionSchema.create({ name: req.body.name });
    let course = await courseSchema.findOne({ _id: req.body.courseId });
    course.sections.push(createdSection._id);
    await course.populate("sections");
    return res.status(201).json(course);
  } catch (err) {
    res.status(500).json(err);
  }
};
