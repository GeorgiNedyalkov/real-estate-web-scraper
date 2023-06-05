const data = require("./data.json");

const filterData = (apartments) => {
  for (let apartment of apartments) {
    console.log(apartment.pricePerSqMeter == "NaN");
  }
};

filterData(data.apartments);
