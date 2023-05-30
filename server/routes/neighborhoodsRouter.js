const express = require("express");
const router = express.Router();

const neighborhoodsController = require("../controllers/");

router.use(neighborhoodsController);

module.exports = router;
