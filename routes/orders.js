const express = require("express");
const router = express.Router();
const OrderController = require("../controller/orderscontroller");
const {authentication,Admin} = require("../middleware/middleware")

router.post("/create",authentication, OrderController.insert )
router.get("/", authentication, OrderController.showAll)


module.exports = router;