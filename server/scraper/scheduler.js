const cron = require("node-cron");
const fetch = require("node-fetch");

console.log("Scheduler is on");

const apiURL = "http://localhost:3001/api/v1/neighborhoods/";

cron.schedule("* * * * *", async () => {
  console.log(`A minute has passed`);
  try {
    console.log(`trying to scrape`);
    await fetch(`${apiURL}/lazur/scraper`);
    console.log("Sucessfull scraping");
  } catch (error) {
    console.log(`Error has occured during scraping: ${error.message}`);
  }
});

cron.schedule("0,30 * * * *", () => {
  console.log(`-----------------------`);
});
