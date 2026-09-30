const { param, body, validationResult } = require("express-validator");

const idRulesValidate = [param("id").isMongoId().withMessage("Not valid ID")];

const RulesValidateFood = [
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

  body("price").notEmpty().withMessage("Price is required").isFloat(),
  body("quantity").notEmpty().withMessage("Quantity is required").isFloat(),
];

function ValidateFood(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

module.exports = {
  idMiddleware: [...idRulesValidate, ValidateFood],
  foodMiddleware: [...RulesValidateFood, ValidateFood],
};
