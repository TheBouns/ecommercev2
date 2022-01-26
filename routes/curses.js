const express = require("express");
const router = express.Router();
const cursesController = require("../controller/cursescontroller");

router.post("/create", cursesController.insert);
router.get("/", cursesController.showCurses);
router.get("/:id", cursesController.showById);
router.get("/title/:title", cursesController.showByNameAll);
router.get("/name/:title", cursesController.showByName);
router.get("/hightolow/order",cursesController.showByDesc);
router.get("/price/:price", cursesController.showByPrice);
router.put("/update/:id", cursesController.updateCurse);
router.delete("/delete/:id",cursesController.delete,)


module.exports = router;
