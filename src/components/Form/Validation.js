const validation = (userData) => {

    let rawErrors = {
        email: [],
        password: []
    }

    if (userData.email === "") {
        rawErrors.email.push("Debe introducir un email")
    }
    
    if (userData.email.length >= 35){
        rawErrors.email.push("El email es demasiado extenso")
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) {
       rawErrors.email.push('Email inválido')
    }

    if (userData.password === "") {
        rawErrors.password.push('Debe introducir una password')
    }

    if (!/\d/.test(userData.password)) {
        rawErrors.password.push('Debe contener al menos un número')
    } 

    if (userData.password.length < 6 || userData.password.length > 10) {
        rawErrors.password.push("La password debe tener una longitud entre 6 y 10 caracteres")
    }

    return rawErrors

 };

    

export default validation;

