const getHomePage = (req, res) => {
  try {
    res.json({
      message: "Hello to Real Estate Web Scraper API 🌍",
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getHomePage };
