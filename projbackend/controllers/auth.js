exports.signout = (res, req) => {
  res.json({
    message: "signout success",
  });
};

router.get("/signout", (req, res) => {
  res.send("user signout");
});