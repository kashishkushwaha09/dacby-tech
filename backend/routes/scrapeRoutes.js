const express = require("express");

const router = express.Router();

const {
  scrapeNews,
} = require("../controllers/scrapeController");

router.post("/", scrapeNews);

module.exports = router;