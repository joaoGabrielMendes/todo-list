const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

router.get("/", controllers.home);
router.get("/todos", controllers.findAll);
router.get("/todos/:id", controllers.findById);
router.post("/todos", controllers.create);
router.put("/todos/check=:id", controllers.check);
router.delete("/todos/delete=:id", controllers.delete);
router.delete("/todos/delete", controllers.deleteAll);

module.exports = router;
