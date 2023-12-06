const express = require("express");
const path = require("path");
const router = express.Router();
const homeController = require("../controllers/home.controller");

router.get("/", homeController.getHomePage);

module.exports = router;
