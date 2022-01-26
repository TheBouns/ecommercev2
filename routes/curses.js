const express = require("express");
const router = express.Router();
const cursesController = require("../controller/cursescontroller");
const {authentication,Admin} = require("../middleware/middleware")

router.post("/create",authentication,Admin, cursesController.insert);
router.get("/", cursesController.showCurses);
router.get("/:id", cursesController.showById);
router.get("/title/:title", cursesController.showByNameAll);
router.get("/name/:title", cursesController.showByName);
router.get("/hightolow/order",cursesController.showByDesc);
router.get("/price/:price", cursesController.showByPrice);
router.put("/update/:id",authentication,Admin, cursesController.updateCurse);
router.delete("/delete/:id",authentication,Admin, cursesController.delete,)


module.exports = router;
