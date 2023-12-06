const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const homeRoute = require("./routes/home.route");
const itemRoute = require("./routes/item.route");

app.use(homeRoute);
app.use("/v1/item", itemRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}/`);
});
