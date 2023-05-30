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
    pricePerSqMeter: requiredNumber,
    yearBuilt: Number,
    constructionType: String,
    completionProgress: String,
    floor: Number,
  },
  { timestamps: true }
);

const Apartment = mongoose.model("Apartments", ApartmentSchema);

module.exports = Apartment;

// TODO: construction type, type and completion phase must be enums
