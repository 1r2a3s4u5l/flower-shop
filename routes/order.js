const express = require("express");
const router = express.Router();
const orderControllers = require("../controllers/order");

router.get("/", orderControllers.getAllorders);

router.get("/:id",orderControllers.getorderByid)


router.put("/:id",orderControllers.updateorder)


router.delete("/:id",orderControllers.deleteorder)


router.post("/", orderControllers.createorder);

module.exports = router;
