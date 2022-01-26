const express = require("express");
const router = express.Router();
const UserController = require("../controller/userController");

router.post("/login",UserController.login);
router.post("/create", UserController.create);
router.get("/", UserController.showUsers);
router.get("/:id", UserController.userById);
router.put("/:id", UserController.updateUser);
router.delete("/delete/:id",UserController.delete)

module.exports = router;
