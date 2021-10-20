var fs = require('fs');

const obj = JSON.parse(fs.readFileSync('./routes/conf-service/conf.json', 'utf8'));

exports.general = (req, res) => {
  return res.json(obj);
};
