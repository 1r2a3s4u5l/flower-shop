const express = require("express");
const router = express.Router();
const customersControllers = require("../controllers/customers");

router.get("/", customersControllers.getAllcustomers);

router.get("/:id",customersControllers.getcustomersByid)


router.put("/:id",customersControllers.updatecustomers)


router.delete("/:id",customersControllers.deletecustomers)


router.post("/", customersControllers.createcustomers);

module.exports = router;
