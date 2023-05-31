const express = require("express");
const router = express.Router();
const Apartment = require("../models/Apartment");
const Neighborhood = require("../models/Neighborhood");

const getAllApartments = require("../scraper/scraper");
const neighborhoods = require("../constants/neighborhoods");

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

router.get("/:neighborhoodId/scraper", async (req, res) => {
  const neighborhood = req.params.neighborhoodId;
  const addedApartments = [];

  try {
    const neighborhoodsdata = await getAllApartments(
      neighborhoods[neighborhood]
    );

    for (let apartment of neighborhoodsdata) {
      const newApartment = await Apartment.create({
        title: apartment.title,
        type: apartment.type,
        price: apartment.price,
        pricepersqmeter: apartment.pricepersqmeter,
        constructiontype: apartment.constructiontype,
        completionprogress: apartment.completionprogress,
        floor: apartment.floor,
        ...apartment,
      });

      addedApartments.push(newApartment);
    }

    const newNeighborhood = await Neighborhood.create({
      name: neighborhood,
      numberOfProperties: addedApartments.length,
      apartments: addedApartments,
    });

    res.status(200).json({ newNeighborhood });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error });
  }
});

module.exports = router;
