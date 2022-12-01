const parseInput = require("./utils");
const axios = require("axios");
const { load } = require("cheerio");

async function getApartments(url) {
  const { data } = await axios.get(url);
  const $ = load(data);

  const topListings = [];
  const vipListings = [];

  const apartmentsContainer = $("#content_container");

  apartmentsContainer.find(".listtop-item").each((i, element) => {
    const $element = $(element);
    const topListing = {};
    topListing.title = $element.find(".listtop-item-title").text();
    const parameters = $element.find(".ads-params-single").text();

    topListing.parameters = parseInput(parameters);
    topListings.push(topListing);
  });

  apartmentsContainer.find(".listvip-params").each((i, listing) => {
    const $listing = $(listing);
    const vipListing = {};

    vipListing.title = $listing
      .find(".listvip-item-header")
      .text()
      .replace(/\t/gm, "")
      .replace(/\n/gm, "");

    vipListing.parameters = $listing
      .find(".listvip-item-content")
      .text()
      .replace(/\n/g, "")
      .replace(/\t/g, "");

    vipListing.parameters = parseInput(vipListing.parameters);
    vipListings.push(vipListing);
  });

  return [...topListings, ...vipListings];
}

// get the first page
async function getFirstPage(url) {
  getApartments(url).then((data) => {
    console.log(data);
    return data;
  });
}

let oneBedUrl = `https://www.alo.bg/obiavi/imoti-prodajbi/apartamenti-stai/?region_id=2&location_ids=300&section_ids=23&p[413]=1574`;
let twoBedUrl = `https://www.alo.bg/obiavi/imoti-prodajbi/apartamenti-stai/?region_id=2&location_ids=300&section_ids=23&p[413]=1575`;
let threeBedUrl = `https://www.alo.bg/obiavi/imoti-prodajbi/apartamenti-stai/?region_id=2&location_ids=300&section_ids=23&p[413]=1576`;

getFirstPage(oneBedUrl);

// const oneBedApartments = await getFirstPage(oneBedUrl)
// const twoBedApartments = await getFirstPage(twoBedUrl)

// console.log(oneBedApartments)
// console.log(twoBedApartments)

module.exports = getApartments;
