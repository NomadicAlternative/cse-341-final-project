const express = require("express");
const router = express.Router();

const furnitureController = require("../../controllers/furniture");
const {
  idMiddleware,
  furnitureMiddleware,
} = require("../../middleware/validateFurniture");
router.get("/", furnitureController.getAll);
router.get("/:id", idMiddleware, furnitureController.getSingle);
router.post(
  "/",
  furnitureMiddleware,
  furnitureController.createFurniture,
);
router.put(
  "/:id",
  idMiddleware,
  furnitureMiddleware,
  furnitureController.updateFurniture,
);
router.delete(
  "/:id",
  idMiddleware,
  furnitureController.deleteFurniture,
);

module.exports = router;
