const express = require("express");
const router = express.Router();
const UserController = require("../controller/userController");

router.post("/create", UserController.create);

module.exports = router;
