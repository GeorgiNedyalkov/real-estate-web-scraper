const data = require("./izgrev_data_31_05_23.json");

const validateFields = (scraperData) => {
  console.log("testing data");
  for (let apartment of scraperData) {
    // if (apartment.floor === null) {
    //   console.log(apartment);
    // }

    // console.log(apartment.constructionType);
    console.log(apartment.completionProgress);
    // console.log(apartment.type);

    // if (
    //   apartment.size === null ||
    //   apartment.size < 10 ||
    //   apartment.size > 200
    // ) {
    //   console.log(apartment.size);
    // }
  }
};

validateFields(data.neighborhoodsData);
