const { param, body, validationResult } = require("express-validator");

const idRulesValidate = [param("id").isMongoId().withMessage("Not valid ID")];

const RulesValidateUsers = [
  body("employeeId")
    .notEmpty()
    .isInt({ min: 1 })
    .withMessage("Enter a valid Clothing ID number")
    .toInt(),

  body("fname")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("First name is required"),

  body("lname")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Last name is required"),

  body("role").isString().trim().notEmpty().withMessage("Role is required"),
];

function ValidateUsers(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

module.exports = {
  idMiddleware: [...idRulesValidate, ValidateUsers],
  usersMiddleware: [...RulesValidateUsers, ValidateUsers],
};
