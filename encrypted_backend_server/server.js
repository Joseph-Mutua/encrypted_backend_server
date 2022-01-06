const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors")
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 8000;
const app = express();

if ((process.env.NODE_ENV = "development")) {
  app.use(cors({ origin: "http://localhost:3000" }));
}
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;