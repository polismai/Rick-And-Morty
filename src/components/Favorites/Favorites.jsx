import Card from '../Card/Card';
import style from './Favorites.module.css';
import { connect } from 'react-redux';

const Favorites = ({myFavorites}) => {
    return (
        <div className={style.card_container}>
            {myFavorites.map(({id, name, status, species, gender, origin, image}) => <Card key={id} id={id} name={name} status={status} species={species} gender={gender} origin={origin} image={image} isFaved={true} />)}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
     myFavorites: state.myFavorites
    }
};

export default connect (mapStateToProps, null)(Favorites);

