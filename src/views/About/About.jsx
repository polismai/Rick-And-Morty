import style from './About.module.css';

const About = () => {
    return(
        <div className={style.about_container}>
        <h2 className={style.about_title}>Sobre mí</h2>
        <div className={style.about_description}>
        <p>¡Hola! Soy Maia Polischuck. Estoy aprendiendo a programar y crear aplicaciones web.</p>
        <p>Puedes encontrarme en:</p>
        </div>
        <ul className={style.about_links}>

          <span>
            <li>GitHub: <a className={style.about_link} href="https://github.com/tu-usuario">tu-usuario</a></li>
            <li>LinkedIn: <a className={style.about_link} href="https://www.linkedin.com/in/tu-perfil">tu-perfil</a></li>
          </span>
          
        </ul>
        <img className={style.about_image} src="tu-imagen.jpg" alt="Tu foto" />
      </div>
    );
}

export default About;

