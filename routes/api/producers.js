const router = require("express").Router();
const producerController = require("../../controllers/producerController");

router.route("/")
  .get(producerController.findAll)
  .post(producerController.create);

router
  .route("/:id")
  .get(producerController.findById)
  .put(producerController.update)
  .delete(producerController.remove);

module.exports = router;