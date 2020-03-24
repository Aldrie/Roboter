const fs = require('fs');

exports.read = (path) => {
  return fs.readFileSync(path, 'utf-8');
};