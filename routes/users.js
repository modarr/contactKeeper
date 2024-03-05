const express = require("express");
const router = express.Router();

// const User = require("../models/user");
router.get("/", (req, res) => {
  res.send("register a user");
});
module.exports = router;
