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
      const parameters = $element.find(".ads-params-single").text()

      topListing.parameters = parseInput(parameters)

      topListings.push(topListing)
    })

  const vipListingsApartments = apartmentsContainer
    .find(".listvip-params")
    .each((i, listing) => {
      const $listing = $(listing)
      const vipListing = {}
      vipListing.title = $listing.find(".listvip-item-header").text()
      const parameters = $listing.find(".listvip-item-content").text()

      vipListing.parameters = parameters
      vipListings.push(vipListing)
    })

  console.log(topListings)
  console.log(vipListings)
}

getOneBedroomApartments()

function parseInput(s) {
  let parameters = {}

  let numbers = []

  for (let char of s) {
    if (!isNaN(char) || char == ".") {
      numbers.push(char)
    }
  }

  let numbersArr = numbers
    .join("")
    .split(" ")
    .filter((element) => element.length > 0)

  parameters.price = +numbersArr[0].replace(/\s/, "")
  parameters.pricePerSqMeter = +numbersArr[1].replace(/\s/, "").slice(0, -1)
  parameters.size = +numbersArr[2]
  parameters.year = numbersArr[3]
  parameters.floor = numbersArr[4]

  return parameters
}
