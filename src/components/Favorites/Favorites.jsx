import Card from '../Card/Card';
import style from './Favorites.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions';
import { useState } from 'react';

const Favorites = () => {
    const myFavorites = useSelector((state) => state.myFavorites);
    const dispatch = useDispatch();
    const [aux, setAux] = useState (false);

    const handleOrder = (e) => {
        setAux(!aux);
        dispatch(orderCards(e.target.value))
    };
    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    };

    return (
        <div>
            <div className={style.containerSelect}>
                <select className={style.select} onChange={handleOrder}>
                    <option value= 'A'>Ascendente</option>
                    <option value= 'D'>Descendente</option>
                </select>
                <select className={style.select} onChange={handleFilter}>
                    <option value= 'all'>Todos</option>
                    <option value= 'Male'>Male</option>
                    <option value= 'Female'>Female</option>
                    <option value= 'Genderless'>Genderless</option>
                    <option value= 'unknown'>unknown</option>
                </select>
            </div>
            <div className={style.card_container}>
                {myFavorites.map(({ id, name, status, species, gender, origin, image }) => <Card key={id} id={id} name={name} status={status} species={species} gender={gender} origin={origin} image={image} />)}
            </div>
        </div>
    )
};

export default Favorites;


