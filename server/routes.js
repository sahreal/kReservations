const express = require("express");
const router = express.Router();
const controllers = require("./controllers/index");

router.get("/getAll", controllers.commands.getAll);
router.post("/update", controllers.commands.update);
router.delete("/clearRoom", controllers.commands.clearRoom);

module.exports = router;
