const express = require("express");
const {getHomePage,getABC} = require('../controllers/home')
const router = express.Router();

router.get("/", getHomePage);

router.get("/getABC", getABC);


module.exports = router