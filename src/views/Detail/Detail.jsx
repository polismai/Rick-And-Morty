import axios from "axios";
import { useParams } from "react-router-dom";
import {  useState } from  'react';
import { useEffect } from "react";
import style from './Detail.module.css';



const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter]  = useState({});
    useEffect(() => {
        axios(`https://rym2.up.railway.app/api/character/${id}?key={pi-polismai}`).then(
           ({ data }) => {
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setCharacter({});
     }, [id]);

    return(
      <div>
      {character && (
        <div className={style.card}>
          <div className={style.card_description}> 
          {character.name && <h2>{character.name}</h2> }
          {character.status && <p>Status: {character.status}</p>}
          {character.species && <p>Species: {character.species}</p>}
          {character.gender && <p>Gender: {character.gender}</p>}
          {character.origin && character.origin.name && (
            <p>Origin: {character.origin.name}</p>
          )}
          </div>
          {character.image && (
          <div className={style.card_image}>
            <img src={character.image} alt={character.name} />
          </div>
          )}
        </div>
      )}
    </div>
  );
}
    
export default Detail;

