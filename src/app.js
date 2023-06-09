const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const app = express();

//? init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

//? init db

//? init routes
app.get("/", (req, res, next) => {
  const srtCompress = "hello server";
  return res.status(200).json({
    message: "welcome To Server",
    metadata: srtCompress.repeat(10),
  });
});

//? handling error

module.exports = app;
