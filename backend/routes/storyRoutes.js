const express = require("express");

const router = express.Router();

const protect = require("../middlewares/authMiddleware");

const {
  getStories,
  getSingleStory,
  toggleBookmark,
  getBookmarks
} = require("../controllers/storyController");

router.get("/",protect, getStories);
router.get(
  "/bookmarks",
  protect,
  getBookmarks
);

router.get("/:id", getSingleStory);

router.post("/:id/bookmark", protect, toggleBookmark);

module.exports = router;