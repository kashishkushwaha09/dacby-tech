const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const storySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    url: {
      type: String,
      required: true,
    },

    points: {
      type: Number,
      default: 0,
    },

    author: {
      type: String,
      required: true,
    },

    postedAt: {
      type: String,
      required: true,
    },

    hackerNewsId: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Story", storySchema);