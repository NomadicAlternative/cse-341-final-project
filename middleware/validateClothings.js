const { param, body, validationResult } = require("express-validator");

const idRulesValidate = [param("id").isMongoId().withMessage("Not valid ID")];

const RulesValidateClothings = [
  body("inMarketId")
    .notEmpty()
    .isInt({ min: 1 })
    .withMessage("Enter a valid Clothing ID number")
    .toInt(),

  body("name").isString().trim().notEmpty().withMessage("Name is required"),

  body("category")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Category is required"),

  body("size").notEmpty().withMessage("Size is required").isString().trim(),
  body("color").notEmpty().withMessage("Color is required").isString().trim(),
  body("price").notEmpty().withMessage("Price is required").isFloat(),
  body("inStock")
    .isBoolean()
    .withMessage("Stock quantity is required")
    .toBoolean(),
  body("material")
    .notEmpty()
    .withMessage("Material is required")
    .isString()
    .trim(),
  body("brand").notEmpty().withMessage("Brand is required").isString().trim(),
  body("careInstructions")
    .notEmpty()
    .withMessage("Care Instructions are required")
    .isString()
    .trim(),
];

function ValidateClothings(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

module.exports = {
  idMiddleware: [...idRulesValidate, ValidateClothings],
  clothingsMiddleware: [...RulesValidateClothings, ValidateClothings],
};
