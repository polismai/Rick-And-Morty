import Card from '../Card/Card';
import store from '../../redux/store';
import { connect } from 'react-redux';

const Favorites = ({myFavorites}) => {
    return (
        <>
            {myFavorites.map(({id, name, status, species, gender, origin, image}) => <Card key={id} id={id} name={name} status={status} species={species} gender={gender} origin={origin} image={image} isFaved={true} />)}
        </>
    )
};

const mapStateToProps = (state) => {
    return {
     myFavorites: state.myFavorites
    }
};

export default connect (mapStateToProps, null)(Favorites);

