var fs = require('fs');

const sortingResponseObj = JSON.parse(fs.readFileSync('./routes/core-service/sortingResponse.json', 'utf8'));

exports.healthcheck = (req, res) => {
            return res.json([]);
};

exports.metadata = (req, res) => {

        return res.json(sortingResponseObj);
};
