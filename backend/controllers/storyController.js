const Story = require("../models/storyModel");
const User = require("../models/userModel");

const getStories = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;

    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const stories = await Story.find()
      .sort({ points: -1 })
      .skip(skip)
      .limit(limit);

    const totalStories = await Story.countDocuments();

    res.status(200).json({
      stories,
      totalPages: Math.ceil(totalStories / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
 const getBookmarks = async (
  req,
  res
) => {
  try {
    const user = await User.findById(
      req.user.id
    ).populate("bookmarks");

    res.status(200).json({
      bookmarks: user.bookmarks,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getSingleStory = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);

    if (!story) {
      return res.status(404).json({
        message: "Story not found",
      });
    }

    res.status(200).json(story);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const toggleBookmark = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const storyId = req.params.id;

    const alreadyBookmarked = user.bookmarks.includes(storyId);

    if (alreadyBookmarked) {
      user.bookmarks = user.bookmarks.filter(
        (id) => id.toString() !== storyId
      );
    } else {
      user.bookmarks.push(storyId);
    }

    await user.save();

    res.status(200).json({
      message: alreadyBookmarked
        ? "Bookmark removed"
        : "Bookmark added",
      bookmarks: user.bookmarks,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getStories,
  getBookmarks,
  getSingleStory,
  toggleBookmark,
};