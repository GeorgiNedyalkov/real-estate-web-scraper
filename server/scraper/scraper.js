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
    let title = $element.find(".listtop-item-title").text();
    let parameters = $element.find(".ads-params-single").text();

    parameters = parseInput(parameters);

    topListings.push({
      title,
      ...parameters,
    });
  });

  apartmentsContainer.find(".listvip-params").each((i, listing) => {
    const $listing = $(listing);

    let title = $listing
      .find(".listvip-item-header")
      .text()
      .replace(/\t/gm, "")
      .replace(/\n/gm, "");

    let parameters = $listing
      .find(".listvip-item-content")
      .text()
      .replace(/\n/g, "")
      .replace(/\t/g, "");

    const parsedParameters = parseInput(parameters);

    vipListings.push({
      title,
      ...parsedParameters,
    });
  });

  return [...topListings, ...vipListings];
}

async function getTotalPages(url) {
  const { data } = await axios.get(url);
  const $ = load(data);

  // get total pages
  const totalListings = $(".obiavicnt").contents().text().split(" ")[0];
  return Math.ceil(Number(totalListings) / 30);
}

async function getFirstPage(url) {
  return await getApartments(url);
}

// get all pages
async function getAllApartments(url) {
  let apartments = [];

  const totalPages = await getTotalPages(url);

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1) {
      const data = await getFirstPage(url);
      apartments.push(...data);
    } else {
      const newUrl = `${url}&page=${i}`;
      const data = await getFirstPage(newUrl);
      apartments.push(...data);
    }
  }

  // console.table(apartments);

  return apartments;
}

getAllApartments(
  "https://www.alo.bg/obiavi/imoti-prodajbi/apartamenti-stai/?region_id=2&location_ids=300&section_ids=23"
);

module.exports = getAllApartments;
