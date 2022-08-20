const axios = require("axios");

const urlAloListingsChannel =
  "https://www.alo.bg/obiavi/imoti-prodajbi/apartamenti-stai/?region_id=2&location_ids=300&section_ids=23";

async function getPropertyPrices() {
  const { data } = await axios.get(urlAloListingsChannel);
  console.log(data);
}

getPropertyPrices();
