const getAllApartments = require("../scraper/scraper");
const Apartment = require("../models/apartment");

const getAllApartmentsIzgrev = async (req, res) => {
  try {
    const scraperData = await getAllApartments(izgrev);
    // TODO: save scraped data to database

    // scraperData.forEach(async (apartment) => {
    //   const newApartment = new Apartment({
    //     title: apartment.title,
    //     price: apartment.price,
    //     size: apartment.size,
    //     pricePerSqMeter: apartment.pricePerSqMeter,
    //     constructionType: apartment.constructionType,
    //   });
    //   await newApartment.save();
    // });

    return res.status(200).json({
      count: scraperData.length,
      result: scraperData,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: error.toString(),
    });
  }
};

module.exports = {
  getAllApartmentsIzgrev,
  getAllApartmentsLazur,
  getAllApartmentsSarafovo,
  getAllApartmentsSlaveikov,
};
