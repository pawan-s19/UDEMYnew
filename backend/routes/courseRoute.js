var express = require("express");
const {
  createCourse,
  getAllCourses,
  createSection,
} = require("../controllers/coursecontroller");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
var router = express.Router();

router.post("/create/course", createCourse);
router.get("/all/course", getAllCourses);

//curriculum routes

router.post("/create/section", createSection);
module.exports = router;
