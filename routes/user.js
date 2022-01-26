const express = require("express");
const router = express.Router();
const UserController = require("../controller/userController");
const {authentication,Admin} = require("../middleware/middleware")

router.post("/login",UserController.login);
router.post("/create",authentication,Admin, UserController.create);
router.get("/", UserController.showUsers);
router.get("/:id", UserController.userById);
router.put("/:id", authentication,Admin,UserController.updateUser);
router.delete("/delete/:id",authentication,Admin,UserController.delete)
router.delete("/logout",authentication, UserController.logout)

module.exports = router;
