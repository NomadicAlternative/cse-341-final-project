const express = require("express");
const router = express.Router();

const foodController = require("../../controllers/food");
const {
  idMiddleware,
  foodMiddleware,
} = require("../../middleware/validateFood");
router.get("/", foodController.getAll);
router.get("/:id", idMiddleware, foodController.getSingle);
router.post("/", foodMiddleware, foodController.createFood);
router.put("/:id", idMiddleware, foodMiddleware, foodController.updateFood);
router.delete("/:id", idMiddleware, foodController.deleteFood);

module.exports = router;
