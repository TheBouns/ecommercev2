const express = require("express");
const router = express.Router();

const categoriesController = require("../controller/categories.controller");

router.get("/zzz/", categoriesController.categoriesCurses);
router.get("/",categoriesController.showAllCategories);
router.post("/create", categoriesController.create);
router.put("/update/:id", categoriesController.update);
router.delete("/delete/:id",categoriesController.delete);
router.get("/:title",categoriesController.showByName);
router.get("/showbyid/:id", categoriesController.showById);




module.exports = router;