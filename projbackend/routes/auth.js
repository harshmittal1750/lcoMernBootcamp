var express = require("express");
var router = express.Router();
const { signout } = require("../controlers/auth");

router.get("/signout", (req, res) => {
  res.send("user signout");
});

module.exports = router;
