const mongoose = require("mongoose");
const validator = require("validator");
const { Schema, model } = mongoose;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "please enter a username"],
    maxLength: [20, "username cannot exceed 20 characters"],
    minLength: [3, "username should be more than 2 characters"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "please enter your email"],
    validate: [validator.isEmail, "Please enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "please enter your password"],
    minLength: [7, "password should be more than 6 characters"],
    select: false,
  },
  profilePic: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  
  this.password = await bcrypt.hash(this.password, 12);
});

//Generating jwt token
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

userSchema.methods.comparePassword = async function (usersPassword) {
  return await bcrypt.compare(usersPassword, this.password);
};

userSchema.methods.getPasswordToken = function () {
  const token = crypto.randomBytes(20).toString("hex");

  //making this token strong using hashing and saving it in userSchema

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
  return token;
};

module.exports = model("userModel", userSchema);
