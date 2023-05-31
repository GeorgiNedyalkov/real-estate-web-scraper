const mongoose = require("mongoose");
const Apartment = require("../models/Apartment");

const neighborhoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  numberOfProperties: Number,
  apartments: [Apartment.schema],
});

const Neighborhood = mongoose.model("Neighborhood", neighborhoodSchema);

module.exports = Neighborhood;
