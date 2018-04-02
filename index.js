const fs = require('fs');

const MODEL_FILE_PATH = '/proc/device-tree/model';
const PATTERN = /raspberry/i;

module.exports = () => new Promise((resolve, reject) => {
  fs.access(MODEL_FILE_PATH, fs.constants.R_OK, (err) => {
    if (err) return resolve(false);

    fs.readFile(MODEL_FILE_PATH, (err, model) => {
      if (err) return reject(err);

      resolve(PATTERN.test(model));
    });
  });
});
