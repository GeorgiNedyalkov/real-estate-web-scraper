import getAllProperties from "./scraper.js"
import getOneBedroomApartments from "./scraper.js"

const apartments = await getOneBedroomApartments(
  `https://www.alo.bg/obiavi/imoti-prodajbi/apartamenti-stai/?region_id=2&location_ids=300&section_ids=23&p[413]=1574`
)

const allApartments = await getAllProperties()
