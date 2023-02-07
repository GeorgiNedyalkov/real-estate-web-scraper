const { Router } = require("express");
const router = Router();
const { getHomePage } = require("../controllers/home");

router.route("/").get(getHomePage);

module.exports = router;
