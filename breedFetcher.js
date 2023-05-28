const request = require('request');

const breed = process.argv.slice(2);


request(`https://api.thecatapi.com/v1/breedds?search=${breed}`, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  const data = JSON.parse(body);
  let result = "";
  data.forEach((obj) => {
    if (obj["name"] == breed) {
      result = obj["description"];
      console.log(result);
    }
  });
  if (result === "") {
    console.log("Breed Not Found");
  }
  if (error) {
    console.error("printing error:",error);
  }
});