const axios = require("axios");

const neighborhoods = require("../constants/neighborhoods");

const apiURL = "http://localhost:3001/api/v1/neighborhoods";

const getData = async () => {
  for (let neighborhood in neighborhoods) {
    try {
      await axios.get(`${apiURL}/${neighborhood}/scraper`);
    } catch (error) {
      console.log(`Error has occured during scraping: ${error.message}`);
    }
  }
};
