const Apartment = require("../models/apartment")
const asyncWrapper = require("../middlewares/asyncWrapper")
const { createCustomError } = require("../errors/custom-error")

const getAllApartments = asyncWrapper(async (req, res) => {
  const apartments = await Apartment.find({})
  res.status(200).json({ apartments })
})

const createApartment = asyncWrapper(async (req, res) => {
  const apartment = await Apartment.create(req.body)
  res.status(201).json({ apartment })
})

const getApartment = asyncWrapper(async (req, res, next) => {
  const { id: apartmentID } = req.params
  const apartment = await Apartment.findOne({ _id: apartmentID })

  if (!apartment) {
    return next(createCustomError(`No apartment with id: ${apartmentID}`, 404))
  }
  res.status(200).json({ apartment })
})

const updateApartment = asyncWrapper(async (req, res) => {
  const { id: apartmentID } = req.params

  const apartment = await Apartment.findOneAndUpdate(
    { _id: apartmentID },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  )

  if (!apartment) {
    return next(createCustomError(`No apartment with id: ${apartmentID}`, 404))
  }

  res.status(200).json({ apartment })
})

const deleteApartment = asyncWrapper(async (req, res) => {
  const { id: apartmentID } = req.params
  const apartment = await Apartment.findOneAndDelete({ _id: apartmentID })

  if (!apartment) {
    return next(createCustomError(`No apartment with id: ${apartmentID}`, 404))
  }
  res.status(200).json({ apartment })
})

//  Testing Delete All Apartments Route
const deleteAllApartments = asyncWrapper(async (req, res) => {
  const deletedApartments = await Apartment.deleteMany({ price: { $gte: 0 } })
  console.log("data deleted")
  res.status(200).json({ deletedApartments })
})

module.exports = {
  getAllApartments,
  createApartment,
  getApartment,
  updateApartment,
  deleteApartment,
  deleteAllApartments,
}
