const express = require("express");
const router = express.Router();
const cursesController = require("../controller/cursescontroller");

router.get("/create", cursesController.create);

module.exports = router;
