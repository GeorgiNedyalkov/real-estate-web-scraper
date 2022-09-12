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

      vipListing.title = $listing
        .find(".listvip-item-header")
        .text()
        .replace(/\t/gm, "")
        .replace(/\n/gm, "")

      vipListing.parameters = $listing
        .find(".listvip-item-content")
        .text()
        .replace(/\n/g, "")
        .replace(/\t/g, "")

      vipListing.parameters = parseInput(vipListing.parameters)

      vipListings.push(vipListing)
    })
  console.log(vipListings)

  // return await topListings
}

getOneBedroomApartments()

// getOneBedroomApartments().then((data) => console.log(data))

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
