const request = require('request');

const args = process.argv;
const sliced = args.slice(2);
let breed = sliced[0];

request("https://api.thecatapi.com/v1/breeds/search?q=" + breed, (error, response, body) => {
  ('error:', error);
  ('statusCode:', response && response.statusCode);
  ('body:', body);
  if (error) {
    console.log('error:', error);
  }
  let data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("We are sorry, we are unable to find that breed");
  } else {
    console.log(data[0].description);
  }
});




