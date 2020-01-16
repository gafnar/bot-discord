exports.createInternalResponse = (code, response, message, warnings) => ({
  code,
  response: response || '200',
  message,
  warnings: warnings || [],
});
