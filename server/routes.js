const express = require("express");
const router = express.Router();
const controllers = require("./controllers/index");

router.get("/getAll", controllers.commands.getAll);

module.exports = router;
