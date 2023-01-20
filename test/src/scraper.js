import axios from "axios";
import { load } from "cheerio";
import parseInput from "./utils.js";

async function getApartments(url) {
  // request the data (html) from the url using axios
  const { data } = await axios.get(url);

  // Load the html
  const $ = load(data);

  // save the listings in top and vip listings
  const topListings = [];
  const vipListings = [];

  // select all the apartments in the content container
  const apartmentsContainer = $("#content_container");

  // see the total pages
  const totalPages = $(".obiavicnt").text();

  // top listings
  apartmentsContainer.find(".listtop-item").each((i, element) => {
    const $element = $(element);
    let topListing = {};

    let title = $element.find(".listtop-item-title").text();
    let parameters = $element.find(".ads-params-single").text();

    parameters = parseInput(parameters);

    topListing = {
      title,
      ...parameters,
    };

    topListings.push(topListing);
  });

  // normal listings
  apartmentsContainer.find(".listvip-params").each((i, listing) => {
    const $listing = $(listing);
    let vipListing = {};

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

    vipListing = {
      title,
      ...parsedParameters,
    };

    vipListings.push(vipListing);
  });

  return [...topListings, ...vipListings];
}

// get the first page
async function getFirstPage(url) {
  getApartments(url).then((data) => {
    console.log(data);
    console.log(data.length);
    return data;
  });
}

let oneBedUrl = `https://www.alo.bg/obiavi/imoti-prodajbi/apartamenti-stai/?region_id=2&location_ids=300&section_ids=23&p[413]=1574`;
let twoBedUrl = `https://www.alo.bg/obiavi/imoti-prodajbi/apartamenti-stai/?region_id=2&location_ids=300&section_ids=23&p[413]=1575`;
let threeBedUrl = `https://www.alo.bg/obiavi/imoti-prodajbi/apartamenti-stai/?region_id=2&location_ids=300&section_ids=23&p[413]=1576`;

async function getAllPages(url) {
  for (let i = 1; i <= 6; i++) {
    if (i === 1) {
      await getFirstPage(url);
    } else {
      let newUrl = url + `&page=${i}`;
      await getFirstPage(newUrl);
    }
  }
}

await getFirstPage(oneBedUrl);

export default { getApartments };
