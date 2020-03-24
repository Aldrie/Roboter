const fs = require('fs');

exports.edit = (path, value) => {
  const data = fs.readFileSync(path, 'utf-8');
  
  const newValue = `${data}${data && '\n'}${value}`;

  fs.writeFileSync(path, newValue);
};