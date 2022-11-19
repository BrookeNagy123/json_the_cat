const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breedName, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    let data = JSON.parse(body);
    const newData = data[0];
    if (newData) {
      callback(null, newData.description);
    } else {
      callback("Breed not found");
    }
    // ('statusCode:', response && response.statusCode);
    // ('body:', body);
  });
};


module.exports = { fetchBreedDescription };



