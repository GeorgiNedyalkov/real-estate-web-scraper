const { Router } = require("express")
const router = Router()

const {
  getAllApartments,
  createApartment,
  getApartment,
  updateApartment,
  deleteApartment,
  deleteAllApartments,
} = require("../controllers/apartments")

router.route("/").get(getAllApartments).post(createApartment)
router
  .route("/:id")
  .get(getApartment)
  .patch(updateApartment)
  .delete(deleteApartment)

router.route("/test2").delete(deleteAllApartments)

module.exports = router
