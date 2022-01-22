const express = require("express");
const router = express.Router();
const cursesController = require("../controller/cursescontroller");

router.post("/create", cursesController.create);
///
module.exports = router;
