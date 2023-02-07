const mongoose = require("mongoose");

const requiredNumber = {
  type: Number,
  required: true,
};

const ApartmentSchema = new mongoose.Schema(
  {
    title: String,
    type: String,
    size: requiredNumber,
    price: requiredNumber,
    pricePerSqMeters: requiredNumber,
    yearBuilt: Number,
    constructionType: String,
    completionPhase: String,
    floor: Number,
    description: String,
  },
  { timestamps: true }
);

const Apartment = mongoose.model("Apartments", ApartmentSchema);

module.exports = Apartment;

// TODO: construction type, type and completion phase must be enums
