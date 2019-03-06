const router = require("express").Router();
const wineController = require("../../controllers/wineController");

// Matches with "/api/books"
router.route("/")
  .get(wineController.findAll)
  .post(wineController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(wineController.findById)
  // .put(wineController.update)
  // .delete(wineController.remove);

module.exports = router;