const axios = require("axios");
const cheerio = require("cheerio");

const urlAloListingsChannel =
  "https://www.alo.bg/obiavi/imoti-prodajbi/apartamenti-stai/?region_id=2&location_ids=300&section_ids=23";

const urlOneBedroomApartments =
  "https://www.alo.bg/obiavi/imoti-prodajbi/apartamenti-stai/?region_id=2&location_ids=300&section_ids=23&p[413]=1574";

async function getOneBedroomApartments() {
  // request the data (html) from the url using axios
  const { data } = await axios.get(urlOneBedroomApartments);
  // Load the html
  const $ = cheerio.load(data);
  // Select a single apartment
  const apartment = $("#adrows_8216642");
  // Select all the apartments in the content container
  const apartmentsContainer = $("#content_container");

  // Select all listing apartments
  const topListingApartments = apartmentsContainer
    .find(".listtop-item")
    .each((i, element) => {
      const $element = $(element);
      const topListing = {};
      // get the titles of all listings
      topListing.title = $element.find(".listtop-item-title").text();

      // find the parameters of all listings
      topListing.price = $element.find(".ads-params-single").text();

      // select only the price of the listing
      const topListingParameters = topListing.price.split(" ");

      const topListingPrices = topListingParameters[0];

      const pricesStrings = [];
      pricesStrings.push(topListingPrices.slice(0, 6).replace(/\s+/g, ""));

      const prices = pricesStrings.map((price) => Number(price));
    });
}

getOneBedroomApartments();

function calculateAverageValue(arr) {
  let numberOfElements = arr.length;

  let sumElements = arr.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });

  return sumElements / numberOfElements;
}
