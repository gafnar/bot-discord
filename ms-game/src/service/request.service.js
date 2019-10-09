const request = require('request');

const requestService = {
  doRequest: (method, url, timeout, headers, body, form) => new Promise((resolve, reject) => {
    const options = {
      method,
      uri: url,
      json: true, // Automatically parses the JSON string in the response
    };
    if (body) options.body = body;
    if (headers) options.headers = headers;
    if (form) options.form = form;
    request(options, (error, response, bod) => {
      if (error) {
        return reject(error);
      }
      return resolve({ statusCode: response.statusCode, body: bod });
    });
  }),
};

module.exports = requestService;
