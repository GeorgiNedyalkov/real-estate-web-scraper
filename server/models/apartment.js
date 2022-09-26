const mongoose = require("mongoose")

const requiredNumber = {
  type: Number,
  required: true,
}

const ApartmentSchema = new mongoose.Schema(
  {
    title: String,
    type: String,
    size: requiredNumber,
    price: requiredNumber,
    priceSqMeters: requiredNumber,
    yearBuilt: Number,
    construction: String,
    phase: String,
    floor: Number,
    description: String,
  },
  { timestamps: true }
)

const Apartment = mongoose.model("Apartments", ApartmentSchema)

module.exports = Apartment
