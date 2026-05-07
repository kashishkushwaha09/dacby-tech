const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const storyRoutes = require("./routes/storyRoutes");
const scrapeRoutes = require("./routes/scrapeRoutes");

const scrapeStories = require("./services/scrapeStories");
const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/stories", storyRoutes);

app.use("/api/scrape", scrapeRoutes);
mongoose
  .connect(process.env.MONGO_URI)
  .then(async() => {
    console.log("MongoDB connected successfully");
     await scrapeStories();
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed");
    console.log(err);
  });