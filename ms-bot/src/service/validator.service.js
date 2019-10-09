const { validationResult } = require('express-validator');

const formatErrorResponse = errors => ({ err: errors.map(error => ({ code: error.msg })) });

module.exports = validations => async (req, res, next) => {
  await Promise.all(validations.map(validation => validation.run(req)));
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();
  res.status(400).json(formatErrorResponse(errors.array()));
  return null;
};
