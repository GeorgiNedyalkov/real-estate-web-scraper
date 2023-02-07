const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("Welcome to the homepage");
});

module.exports = router;
