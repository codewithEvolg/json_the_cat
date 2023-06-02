const request = require('request');
const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds`, (error, response, body) => {
    let result = "";
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      data.forEach((d) => {
        if (d.name == breed) {
          result = d.description;
          callback(null, d.description);
        }
      })

      if (!result) {
        callback(null, "Breed Not Found!")
      }
    }
  });
};



// const fetchBreedDescription = (breed, callback) => {
//     https.request(`https://api.thecatapi.com/v1/breeds?search=${breed}`, (error, response, body) => {
//       const data = JSON.parse(body);
//       //console.log(data);
//       let result = "";
//       for (const obj in data) {
//         if (data[obj] == breed) {
//           console.log(data[obj]);
//         }
//       }
//       // data.forEach((obj) => {
//       //   if (obj["name"] == breed) {
//       //     result = obj["description"];
//       //     return result;
//       //   }
//       // });
//       // if (!result) {
//       //   result = "Breed Not Found";
//       //   return result;
//       // }
//       if (error) {
//         return error;
//       }
//     })
// }



module.exports = {fetchBreedDescription : fetchBreedDescription }