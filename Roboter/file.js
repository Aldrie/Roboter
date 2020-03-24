const fs = require('fs');

exports.read = (path) => {
  return fs.readFileSync(path, 'utf-8');
};

exports.edit = (path, value) => {
  let data = '';

  if(fs.existsSync(path)) {
    data = fs.readFileSync(path, 'utf-8');
  }
  
  const newValue = `${data}${data && '\n'}${value}`;

  fs.writeFileSync(path, newValue);
};