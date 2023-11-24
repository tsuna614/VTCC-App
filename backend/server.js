const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const homeRoute = require("./routes/home.route");

app.use(homeRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}/`);
});
