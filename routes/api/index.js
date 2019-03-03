const router = require("express").Router();
const wineRoutes = require("./wines");

// wine routes
router.use("/wines", wineRoutes);

module.exports = router;