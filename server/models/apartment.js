const mongoose = require("mongoose");

const requiredNumber = {
  type: String,
  required: Number,
};

const ApartmentSchema = new mongoose.Schema(
  {
    title: String,
    type: String,
    size: requiredNumber,
    price: requiredNumber,
    pricePerSqMeter: requiredNumber,
    // yearBuilt: Number,
    constructionType: {
      type: String,
      enum: {
        values: ["Тухла", "Панел", "ЕПК/ПК"],
      },
    },
    completionProgress: {
      type: String,
      enum: {
        values: ["project", "construction", "completed"],
      },
    },
    // floor: Number,
    latfloor: Boolean,
    priceHistory: [
      {
        price: { type: Number, required: true },
        date: { type: Date, default: Date.now() },
      },
    ],
  },
  { timestamps: true }
);

// Apartments without listing prices should be removed
// Apartments with floor or size as null should be eliminated

ApartmentSchema.pre("save", (next) => {
  if (this.floor === null || this.size === null) {
    next(
      new Error(
        "Apartment has either floor or size values of null, skip saving."
      )
    );
  } else {
    next();
  }
});

const Apartment = mongoose.model("Apartments", ApartmentSchema);

module.exports = Apartment;

// TODO: construction type, type and completion phase must be enums
