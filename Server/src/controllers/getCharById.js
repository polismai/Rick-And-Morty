const axios = require ("axios");

const getCharById = (res, id) => {
    axios(`https://rym2.up.railway.app/api/character/${id}?key={pi-polismai}`)
    .then(response => {
        const characterData = {
          id: id,
          name: response.data.name,
          gender: response.data.gender,
          species: response.data.species,
          origin: response.data.origin,
          image: response.data.image,
          status: response.data.status
        };
        res.writeHead(200, { "Content-Type": "application/json"});
        return res.end(
            JSON.stringify(characterData)
        )
      })
    .catch(error => {
        res.writeHead(500, { "Content-Type": "text/plain"});
        return res.end(error.message)
      });
};

module.exports = getCharById;







//axios(`https://rym2.up.railway.app/api/character/${id}?key={tuApiKey}`).then(
    //  ({ data }) => {
    //     if (data.name) {
    //       setCharacters((oldChars) => [...oldChars, data]);
     //    } else {
   //         window.alert('¡No hay personajes con este ID!');
   //      }
  //    }
  // );
