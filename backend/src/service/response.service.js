exports.createGeneralError = err => ({
  statusCode: err.statusCode || 500,
  body: {
    result: {
      code: err.code || '',
      message: err.message,
    },
    errors: err.errors,
  },
});
