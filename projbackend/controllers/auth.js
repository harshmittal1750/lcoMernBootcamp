const User = require("../models/user");
exports.signup = (req, res) => {
  const user = new User(req, body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).send({
        err: "NOT able to save user in DB",
      });
      res.json("user");
    }
  });
};
exports.signout = (req, res) => {
  res.json({
    message: "User signout",
  });
};
