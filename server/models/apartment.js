const mongoose = require("mongoose");

const requiredNumber = {
    type: Number,
    required: true,
};

const apartmentSchema = new mongoose.Schema(
    {
        title: String,
        type: String,
        size: requiredNumber,
        price: requiredNumber,
        pricePerSqMeter: requiredNumber,
        // floor: Number,
        // yearBuilt: Number,
        constructionType: {
            type: String,
            enum: {
                values: ["Тухла", "Панел", "ЕПК/ПК", "Гредоред", ""],
            },
        },
        completionProgress: {
            type: String,
            enum: {
                values: ["project", "construction", "completed"],
            },
        },
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

const Apartment = mongoose.model("Apartments", apartmentSchema);

module.exports = Apartment;

// TODO: construction type, type and completion phase must be enums
