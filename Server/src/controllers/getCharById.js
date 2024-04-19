// const axios = require ("axios");

// const getCharById = (res, id) => {
//     axios(`https://rym2.up.railway.app/api/character/${id}?key={pi-polismai}`)
//     .then(response => {
//         const characterData = {
//           id: id,
//           name: response.data.name,
//           gender: response.data.gender,
//           species: response.data.species,
//           origin: response.data.origin,
//           image: response.data.image,
//           status: response.data.status
//         };
//         res.writeHead(200, { "Content-Type": "application/json"});
//         return res.end(
//             JSON.stringify(characterData)
//         )
//     })
//     .catch(error => {
//         res.writeHead(500, { "Content-Type": "text/plain"});
//         return res.end(error.message)
//     });
// };

// module.exports = getCharById;


const axios = require ("axios");
const URL = "https://rym2.up.railway.app/api/character/";

const getCharById = async (req, res) => {
  try{
    const { id } = req.params;
    const response = await axios.get(`${URL}${id}?key=pi-polismai`)
    if(response.data) {
      const characterData = {
        id: response.data.id,
        status: response.data.status,
        name: response.data.name,
        species: response.data.species,
        origin: response.data.origin,          
        image: response.data.image,
        gender: response.data.gender
      };
      res.status(200).json(characterData);
    } else {
      res.status(404).send("Not found");
      }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
  
module.exports = getCharById;




