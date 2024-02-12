const ErrorHandler = require("../errorHandlers/errorHandler");

module.exports = (error, res, req, next) => {
  error.statusCode = error.statusCode || 500;
  error.message = error.message || "Internal Server Error";

  res.status(error.statusCode).json({
    success: false,
    error: error,
  });
};
