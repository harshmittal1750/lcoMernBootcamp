const express = require("express");
const app = express();
const port = 8000;
app.get("/homepage", (req, res) => {
  return res.send("Hello there");
});
app.get("/login", (req, res) => {
  return res.send("Hello user, u r sign in");
});
app.get("/signout", (req, res) => {
  return res.send("Hello user, u r sign out");
});
app.listen(port, () => {
  console.log("Server is fine");
});
