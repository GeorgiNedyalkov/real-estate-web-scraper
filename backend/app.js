const axios = require("axios")
const cheerio = require("cheerio")

const urlOneBedroomApartments =
  "https://www.alo.bg/obiavi/imoti-prodajbi/apartamenti-stai/?region_id=2&location_ids=300&section_ids=23&p[413]=1574"

const topListings = []
const vipListings = []

async function getOneBedroomApartments() {
  // request the data (html) from the url using axios
  const { data } = await axios.get(urlOneBedroomApartments)
  // Load the html
  const $ = cheerio.load(data)

  // Select all the apartments in the content container
  const apartmentsContainer = $("#content_container")

  const topListingApartments = apartmentsContainer
    .find(".listtop-item")
    .each((i, element) => {
      const $element = $(element)
      const topListing = {}
      topListing.title = $element.find(".listtop-item-title").text()
      topListing.parameters = $element.find(".ads-params-single").text()
      topListings.push(topListing)
    })

  const vipListingsApartments = apartmentsContainer
    .find(".listvip-params")
    .each((i, listing) => {
      const $listing = $(listing)
      const vipListing = {}
      vipListing.title = $listing.find(".listvip-item-header").text()
      vipListing.parameters = $listing.find(".listvip-item-content").text()
      vipListings.push(vipListing)
    })

  console.log(topListings)
  console.log(vipListings)
}

getOneBedroomApartments()
