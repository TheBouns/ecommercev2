const express = require("express");
const router = express.Router();
const categoriesController = require("../controller/categories.controller");
const {authentication,Admin} = require("../middleware/middleware")

router.get("/catcurs/", categoriesController.CatCurs);
router.get("/",categoriesController.showAllCategories);
router.post("/create",authentication,Admin, categoriesController.create);
router.put("/update/:id",authentication,Admin,categoriesController.update);
router.delete("/delete/:id",authentication,Admin,categoriesController.delete);
router.get("/:title",categoriesController.showByName);
router.get("/showbyid/:id", categoriesController.showById);




module.exports = router;