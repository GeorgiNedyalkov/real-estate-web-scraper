const axios = require("axios");
const cheerio = require("cheerio");

const urlAloListingsChannel =
  "https://www.alo.bg/obiavi/imoti-prodajbi/apartamenti-stai/?region_id=2&location_ids=300&section_ids=23";

async function getPropertyPrices() {
  // create a get request for the webpage that we need to exctract data from
  const { data } = await axios.get(urlAloListingsChannel);

  // Working with cheerio
  // First we need to load the HTML
  const $ = cheerio.load(data);

  // select the proper html from an id selector
  const propertyContainer = $("div#adrows_7818733");

  const propertiesContainer = $("div.content_container_list");

  const properties = propertiesContainer.find("div.listtop-item");

  console.log(properties.text());

  const propertyParameters = [];

  propertyContainer.find("div.listtop-item-params").each((i, element) => {
    const $element = $(element);
    const property = {};
    property.name = $element.find("div.ads-params-row").text();
    // get the text of every single element in the adrows div
    // console.log(property);
  });
}

getPropertyPrices();
