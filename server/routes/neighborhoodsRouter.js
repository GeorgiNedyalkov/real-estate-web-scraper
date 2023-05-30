const router = require("express").Router();
const neighborhoodsController = require("../controllers/neighborhoodsController.js");

router.use("/", neighborhoodsController);

module.exports = router;
