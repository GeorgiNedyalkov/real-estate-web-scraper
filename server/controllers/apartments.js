const Apartment = require("../models/apartment")

const getAllApartments = async (req, res) => {
  try {
    const apartments = await Apartment.find({})
    res.status(200).json({ numberOfApartments: apartments.length, apartments })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const createApartment = async (req, res) => {
  try {
    const apartment = await Apartment.create(req.body)
    res.status(201).json({ apartment })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const getApartment = async (req, res) => {
  try {
    const { id: apartmentID } = req.params
    const apartment = await Apartment.findOne({ _id: apartmentID })

    if (!apartment) {
      return res
        .status(404)
        .json({ msg: `No apartment with id: ${apartmentID}` })
    }
    res.status(200).json({ apartment })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const updateApartment = async (req, res) => {
  try {
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
      return res
        .status(404)
        .json({ msg: `No apartment with id: ${apartmentID}` })
    }

    res.status(200).json({ apartment })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const deleteApartment = async (req, res) => {
  try {
    const { id: apartmentID } = req.params
    const apartment = await Apartment.findOneAndDelete({ _id: apartmentID })

    if (!apartment) {
      return res
        .status(404)
        .json({ msg: `No apartment with id: ${apartmentID}` })
    }
    res.status(200).json({ apartment })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

module.exports = {
  getAllApartments,
  createApartment,
  getApartment,
  updateApartment,
  deleteApartment,
}
