const express = require("express");
const router = express.Router();
const flowerRoutes = require("./flower");
const customersRoutes = require("./customers");
const orderRoutes = require("./order");

router.use("/flowers", flowerRoutes);
router.use("/customers", customersRoutes);
router.use("/order", orderRoutes);
module.exports = router;
