const fs = require('fs');

const base64Encode = (file) => {
    const bitmap = fs.readFileSync(file);
    const base64 = new Buffer.from(bitmap).toString('base64');
    fs.writeFile('./base64encoding.txt', base64, err => {
      if (err) console.error(err);
    })
}

module.exports = { base64Encode }