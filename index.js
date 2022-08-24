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
}

getOneBedroomApartments();
