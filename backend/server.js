const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const storyRoutes = require("./routes/storyRoutes");
const scrapeRoutes = require("./routes/scrapeRoutes");

const scrapeStories = require("./services/scrapeStories");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api/stories", storyRoutes);

app.use("/api/scrape", scrapeRoutes);
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found",
    });
});
mongoose
    .connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("MongoDB connected successfully");
        await scrapeStories();
        console.log("Stories scraped successfully");
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB connection failed");
        console.log(err);
    });