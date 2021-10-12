var express = require("express");
var router = express.Router();

router.get("/Signout", (req, res) => {
  res, send("User Signout");
});
module.exports = router;
