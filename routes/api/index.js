const router = require("express").Router();
const wineRoutes = require("./wines");
const producerRoutes = require("./producers");
const loginRoutes = require("./login");

// wine routes
router.use("/wines", wineRoutes);
router.use("/producers", producerRoutes);
router.use("/login", loginRoutes);

module.exports = router;