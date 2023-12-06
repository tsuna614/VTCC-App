const express = require("express");
const path = require("path");
const router = express.Router();
const homeController = require("../controllers/home.controller");

// router.get("/", homeController.getHomePage);

router.get("/", (req, res) => {
  const { spawn } = require("child_process");
  const pyProg = spawn("python", [
    "backend.py",
    "E:\\MayHocvaCongCu_SE335\\Project\\data\\Banh_1.jpg",
  ]);

  console.log('running');

  pyProg.stdout.on("data", function (data) {
    console.log(data.toString());
    // res.write(data);
    // res.end("end");
  });
});

module.exports = router;
