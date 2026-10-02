const express = require("express");
const router = express.Router();


const clothingsController = require("../../controllers/clothings");
const {
  idMiddleware,
  clothingsMiddleware,
} = require("../../middleware/validateClothings");
router.get("/", clothingsController.getAll);
router.get("/:id", idMiddleware, clothingsController.getSingle);
router.post(
  "/",
  clothingsMiddleware,
  clothingsController.createClothing,
);
router.put(
  "/:id",
  idMiddleware,
  clothingsMiddleware,
  clothingsController.updateClothing,
);
router.delete(
  "/:id",
  idMiddleware,
  clothingsController.deleteClothing,
);

module.exports = router;
