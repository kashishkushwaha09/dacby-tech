const axios = require("axios");
const cheerio = require("cheerio");

const Story = require("../models/Story");

const scrapeStories = async () => {
  try {
    const { data } = await axios.get(
      "https://news.ycombinator.com"
    );

    const $ = cheerio.load(data);

    const stories = [];

    $(".athing").each((index, element) => {
      if (index >= 10) return false;

      const titleElement = $(element).find(".titleline a");

      const title = titleElement.text().trim();

      let url = titleElement.attr("href") || "";

      if (url.startsWith("item?id=")) {
        url = `https://news.ycombinator.com/${url}`;
      }

      const subtext = $(element).next().find(".subline");

      const points =
        parseInt(subtext.find(".score").text()) || 0;

      const author =
        subtext.find(".hnuser").text().trim() || "Unknown";

      const postedAt =
        subtext.find(".age").text().trim() || "Unknown";

      const hackerNewsId = $(element).attr("id");

      stories.push({
        hackerNewsId,
        title,
        url,
        points,
        author,
        postedAt,
      });
    });

    await Story.deleteMany({});

    await Story.insertMany(stories);

    console.log("Stories scraped successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = scrapeStories;