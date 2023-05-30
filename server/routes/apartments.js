const { Router } = require("express");
const router = Router();

const {
  getAllApartments,
  createApartment,
  getApartment,
  updateApartment,
  deleteApartment,
} = require("../controllers/apartments");

const {
  getAllNeighborhoodApartments,
} = require("../controllers/priceController");

// get all apartments based on neighborhood

// CRUD Apartment operations

router.route("/").get(getAllApartments).post(createApartment);
router
  .route("/:id")
  .get(getApartment)
  .patch(updateApartment)
  .delete(deleteApartment);

module.exports = router;
