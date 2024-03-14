import Card from '../../components/Card/Card';
import style from './About.module.css';
import maiaImg from '../../images/maiaImg.jpg';


const About = () => {
    const {id, name, status, species, gender, origin, image, onClose} = {
        id: 'maia',
        name: "Maia Polischuck",
        status: "Alive",
        species: "Human",
        gender: "Female",
        origin: "Earth",
        image: maiaImg,
        onClose: (id) => {
            console.log(id)
        }
    }

    return (
        <div className={style.card_container}>
            <Card key={id} id={id} name={name} status={status} species={species} gender={gender} origin={origin} image={image} onClose={onClose} />
        </div>
    );
}

export default About;
