const getAllApartments = require("../scraper/scraper");
const Apartment = require("../models/apartment");

const izgrev =
  "https://www.alo.bg/obiavi/imoti-prodajbi/apartamenti-stai/?region_id=2&location_ids=300&section_ids=23";

const lazur =
  "https://www.alo.bg/obiavi/imoti-prodajbi/apartamenti-stai/?region_id=2&location_ids=300&section_ids=26";

const sarafovo =
  "https://www.alo.bg/obiavi/imoti-prodajbi/apartamenti-stai/?region_id=2&location_ids=300&section_ids=31";

const slaveikov =
  "https://www.alo.bg/obiavi/imoti-prodajbi/apartamenti-stai/?region_id=2&location_ids=300&section_ids=32";

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

const getAllApartmentsLazur = async (req, res) => {
  try {
    const scraperData = await getAllApartments(lazur);
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

const getAllApartmentsSarafovo = async (req, res) => {
  try {
    const scraperData = await getAllApartments(sarafovo);
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

const getAllApartmentsSlaveikov = async (req, res) => {
  try {
    const scraperData = await getAllApartments(slaveikov);
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
