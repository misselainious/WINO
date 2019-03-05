const router = require("express").Router();
const wineRoutes = require("./wines");
const producerRoutes = require("./producers");

// wine routes
router.use("/wines", wineRoutes);
router.use("/producers", producerRoutes);

module.exports = router;