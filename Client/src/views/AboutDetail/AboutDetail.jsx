import style from './AboutDetail.module.css';
import maiaImg from '../../images/maiaImg.jpg';

const AboutDetail = () => {
    return(
      <div className={style.aboutContainer}>
          <div className={style.aboutText}>
              <p>¡Hola! Soy Maia, una apasionada de la tecnología y la programación.</p>
              <p>Originaria de La Plata, Buenos Aires, me gradué como Técnica Química Universitaria y Técnica Universitaria en Alimentos.</p>
              <p>Después de ejercer como docente de química, mi familia y yo decidimos mudarnos a Uruguay en busca de nuevas oportunidades y experiencias.</p> 
              <p>Fue entonces cuando decidí embarcarme en un nuevo desafío: estudiar programación.</p>
              <p>En mi viaje de aprendizaje, descubrí Soy Henry, una comunidad educativa increíble que me está brindando las herramientas y el conocimiento necesarios para convertirme en una desarrolladora web.</p>
              <p> Cada día, estoy emocionada por aprender algo nuevo y enfrentar desafíos que me ayuden a crecer tanto personal como profesionalmente.</p>
              <p>Puedes encontrarme en:</p>
              <ul>
                  <li>Github: <a href="https://github.com/polismai">polismai</a></li>
              </ul>
              <blockquote>
                <p>"El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que estás haciendo, serás exitoso." - Albert Schweitzer</p>
              </blockquote>
          </div>
          <div>
            <div className={style.card}>
              <div className={style.card_description}> 
                <h2>Maia Polischuck</h2>
                <p>Status: Alive</p>
                <p>Species: Human</p>
                <p>Gender: Female</p>
                <p>Origin: Earth</p>
              </div>
              <div className={style.card_image}>
                <img src={maiaImg} alt="Maia Polischuck" />
              </div>
            </div>
          </div>
      </div>
  );
}
    
export default AboutDetail;

