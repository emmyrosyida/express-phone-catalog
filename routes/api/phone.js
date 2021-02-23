const express = require("express");
const phone = require("./phone.json");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(phone);
});

module.exports = router;
