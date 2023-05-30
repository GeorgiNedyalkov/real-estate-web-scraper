const express = require("express");
const router = express.Router();

const Apartment = require("../models/apartment");
const getAllApartments = require("../scraper/scraper");
const { neighborhoods } = require("../constants/neighborhoods");

router.get("/:neighborhoodId", async (req, res) => {
  const neighborhood = req.params.neighborhoodId;

  try {
    const neighborhoodsData = await getAllApartments(
      neighborhoods[neighborhood]
    );

    res.status(200).json({ neighborhoodsData });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
