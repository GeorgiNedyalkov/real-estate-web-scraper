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
  getAllApartmentsIzgrev,
  getAllApartmentsSarafovo,
  getAllApartmentsLazur,
  getAllApartmentsSlaveikov,
} = require("../controllers/priceController");

// get all apartments based on neighborhood
router.route("/izgrev").get(getAllApartmentsIzgrev);
router.route("/lazur").get(getAllApartmentsLazur);
router.route("/sarafovo").get(getAllApartmentsSarafovo);
router.route("/slaveikov").get(getAllApartmentsSlaveikov);

router.route("/").get(getAllApartments).post(createApartment);
router
  .route("/:id")
  .get(getApartment)
  .patch(updateApartment)
  .delete(deleteApartment);

module.exports = router;
