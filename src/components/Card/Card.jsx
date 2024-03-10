import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import store from '../../redux/store';

function Card({id, name, status, species, gender, origin, image, onClose, isFaved, myFavorites}) {
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         store.dispatch(removeFav(id));
      } else {
         setIsFav(true);
         store.dispatch(addFav({id, name, status, species, gender, origin, image}));
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
     
   return (
      <div className={style.card}>
         {!isFaved && (
            <>
               { isFav ? (
                  <button className={style.favoriteButton} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button className={style.favoriteButton} onClick={handleFavorite}>🤍</button>
               )}
            </>
         )}
         {!isFaved && <button className={style.card_button} onClick={() => onClose(id)}>X</button>}
         <Link to={`/detail/${id}`}>
            <h2 className={style.nombre}>{name}</h2>
         </Link>
         <img src={image} alt={name} /> 
      </div>
   );
};

const mapStateToProps = (state) => {
   return { myFavorites: state.myFavorites };
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: () => {
         dispatch(addFav());
      },
      removeFav: () => {
         dispatch(removeFav());
      }
   }
};

export default connect (mapStateToProps, mapDispatchToProps)(Card);