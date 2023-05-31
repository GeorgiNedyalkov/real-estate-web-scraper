const mongoose = require("mongoose");

const requiredNumber = {
  type: String,
  required: true,
};

const apartmentSchema = new mongoose.Schema(
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

apartmentSchema.pre("save", (next) => {
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

const Apartment = mongoose.model("Apartments", apartmentSchema);

module.exports = Apartment;

// TODO: construction type, type and completion phase must be enums
