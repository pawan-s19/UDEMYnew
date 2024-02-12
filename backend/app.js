var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const dotenv = require("dotenv");
var userRouter = require("./routes/userRoute");
var courseRouter = require("./routes/courseRoute");
const errorMiddleware = require("./middleware/error");
const cloudinary = require("cloudinary");
const expressFileUpload = require("express-fileupload");
var app = express();
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
dotenv.config({ path: "./.env" });

require("./models/database").dbConnection();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(errorMiddleware);
app.use(logger("dev"));
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(expressFileUpload());
app.use("/", userRouter);
app.use("/", courseRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.json("error");
});

module.exports = app;
