import style from './Form.module.css';
import { useState } from 'react';
import validation from './Validation';
import logo from '../../images/r_and_m.png'

const Form = ({login}) => {

    const [interacted, setInteracted] = useState({
        email: false,
        password: false
    });

    const [userData, setUserData] = useState({
        email: "",
        password :"",
    })

    const [errors, setErrors] = useState({
        email: [],
        password: [],
    });

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setInteracted({...interacted, [property]: true});

        setUserData({...userData, [property]:value});

        const listaDeErrores = validation({...userData, [property]:value});
        setErrors(listaDeErrores)
    } 

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    const [shown, setShown] = useState(false);
    const switchShown = () => setShown(!shown);

    return(
        <div className={style.formWrapper}>
          <img src={logo} className={style.logo} />
         <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.container}>
                <div className={style.input}>
                    <label htmlFor='email'>Email</label>
                    <div>
                        <input className={errors.email.length ? style.error : (interacted.email && style.success)} type='text' name='email' onChange={handleChange} />
                        <span className={style.errorSpan}>{errors.email.map((error, i) => <p key={i}>{error}</p>)}</span>
                    </div>
                </div>
                <div className={style.input}>
                    <label htmlFor= 'password'>Password</label>
                    <div>
                        <input className={errors.password.length ? style.error : (interacted.password && style.success)} type={shown ? 'text' : 'password'} name='password' onChange={handleChange}/>
                        <button type="button" className={style.boton} onClick={switchShown}>{shown ? 'Ocultar' : 'Mostrar'}</button>
                        <span className={style.errorSpan}>{errors.password.map((error, i) => <p key={i}>{error}</p>)}</span>
                    </div>
                </div>
            </div>
            <button 
                type='submit'  
                className={style.submit} 
                disabled={errors.email.length || errors.password.length || userData.email === "" || userData.password === ""}
            >Submit</button>
        </form> 
        </div>
    )
}

export default Form;