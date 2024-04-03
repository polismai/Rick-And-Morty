import style from './Card.module.css';
import { Link, useLocation } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import store from '../../redux/store';

function Card({ id, name, status, species, gender, origin, image, onClose, myFavorites }) {

   const location = useLocation();
   const isHomePage = location.pathname === '/home';
   
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
         {isHomePage && (
            <>
               { isFav ? (
                  <button className={style.favoriteButton} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button className={style.favoriteButton} onClick={handleFavorite}>🤍</button>
               )}
            </>
         )}
         {isHomePage && <button className={style.card_button} onClick={() => onClose(id)}>X</button>}
         <h2 className={style.nombre}>{name}</h2>
         <Link to={`/detail/${id}`}>
            <img src={image} alt={name} /> 
         </Link> 
      </div>
   );
};

const mapStateToProps = (state) => {
   return { myFavorites: state.myFavorites };
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character));
      },
      removeFav: (id) => {
         dispatch(removeFav(id));
      }
   }
};

export default connect (mapStateToProps, mapDispatchToProps)(Card);