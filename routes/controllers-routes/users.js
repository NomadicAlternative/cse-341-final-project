const express = require("express");
const router = express.Router();


const usersController = require("../../controllers/users");
const {
  idMiddleware,
  usersMiddleware,
} = require("../../middleware/validateUsers");
router.get("/", usersController.getAll);
router.get("/:id", idMiddleware, usersController.getSingle);
router.post("/", usersMiddleware, usersController.createUser);
router.put(
  "/:id",
  idMiddleware,
  usersMiddleware,
  usersController.updateUser,
);
router.delete(
  "/:id",
  idMiddleware,
  usersController.deleteUser,
);

module.exports = router;
