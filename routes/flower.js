const express = require("express");
const router = express.Router();
const flowerControllers = require("../controllers/flower");

router.get("/", flowerControllers.getAllFlowers);

router.get("/:id",flowerControllers.getFlowerByid)


router.put("/:id",flowerControllers.updateFlower)


router.delete("/:id",flowerControllers.deleteFlower)


router.post("/", flowerControllers.createFlower);

module.exports = router;
