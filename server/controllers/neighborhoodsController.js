const express = require("express");
const router = express.Router();

const Apartment = require("../models/Apartment");
const Neighborhood = require("../models/Neighborhood");
const neighborhoods = require("../constants/neighborhoods");
const getAllApartments = require("../scraper/scraper");
const filterData = require("../utils/filterData");

router.get("/", async (req, res) => {
  try {
    const neighborhoods = await Neighborhood.find({});
    res.status(200).json({ count: neighborhoods.length, neighborhoods });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get("/:neighborhoodId", async (req, res) => {
  try {
    const neighborhood = await Neighborhood.find({
      name: req.params.neighborhoodId,
    });
    res.status(200).json({ neighborhood });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Add authorization middleware
router.get("/:neighborhoodId/scraper", async (req, res) => {
  const neighborhood = req.params.neighborhoodId;
  const addedApartments = [];

  try {
    const neighborhoodsdata = await getAllApartments(
      neighborhoods[neighborhood]
    );

    const [filteredApartments, skippedApartments] =
      filterData(neighborhoodsdata);

    for (let apartment of filteredApartments) {
      const newApartment = await Apartment.create(apartment);

      addedApartments.push(newApartment);
    }

    const newNeighborhood = await Neighborhood.create({
      name: neighborhood,
      numberOfProperties: addedApartments.length,
      apartments: addedApartments,
      skippedApartments: skippedApartments,
    });

    res.status(200).json({ newNeighborhood });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error });
  }
});

module.exports = router;
