const cron = require("node-cron");
const axios = require("axios");
const neighborhoods = require("../constants/neighborhoods");
const apiURL = "http://localhost:3001/api/v1/neighborhoods";

let initialScraping = true;

const startScheduler = async () => {
  console.log("Scheduler is on");

  if (initialScraping) {
    console.log("there has been initial scraping");

    initialScraping = false;
  } else {
    cron.schedule("*/10 * * * *", async () => {
      console.log("Updating prices");
    });
  }
};

startScheduler();
