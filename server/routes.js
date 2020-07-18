const express = require("express");
const router = express.Router();
const controllers = require("./controllers/index");

router.get("/getAll", controllers.commands.getAll);
router.post("/update", controllers.commands.update);

module.exports = router;
