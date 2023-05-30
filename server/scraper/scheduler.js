const cron = require("node-cron");

cron.schedule("* * * * *", () => {
  console.log("running a task every minute");
});

cron.schedule("0,30 * * * *", () => {
  console.log(`-----------------------`);
  console.log("running a task every half an hour");

  console.log(`Scraping some prices`);
  console.log(`Save the prices`);
});
