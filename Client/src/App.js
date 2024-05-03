import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './views/About/About';
import AboutDetail from './views/AboutDetail/AboutDetail';
import Detail from './views/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() {
   const { pathname } = useLocation();
   if (pathname === '/') {
      document.body.className = "formBack";
   }
   if (pathname !== '/') {
      document.body.className = "allBack";
   }
   const [characters, setCharacters] = useState([]);
   const [serverLoginError, setServerLoginError] = useState(false);
   
   // const onSearch = async (id) => {
   //    try {
   //       const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
   //       const { data } = response;
      
   //       if (data.name) {
   //          const existe = characters.find(character => parseInt(character.id) === parseInt(id))
   //          if (!existe) {
   //             setCharacters((oldChars) => [...oldChars, data])
   //          }
   //       } else {
   //          window.alert('¡No hay personajes con este ID!');
   //       }
   //    } catch (error) {
   //       console.error('Error al realizar la búsqueda:', error);
   //    }  
   // };

   const onSearch = async (id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);

         setCharacters((oldChars) => [...oldChars, data]);
      } catch (error) {
         window.alert('¡No hay personajes con este ID!');
      }
   };


   const onClose = (id) => {
      const nuevaLista = characters.filter ((character)=> parseInt(character.id) !== parseInt(id))
      setCharacters(nuevaLista)
   };

   const [access, setAccess] = useState(false);
   const navigate = useNavigate();

   const login = async (userData) => {
      try {
         setServerLoginError(false);
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const response = await axios(URL + `?email=${email}&password=${password}`);
         const { data } = response;
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      } catch (error) {
         setServerLoginError(true);
         console.error('Error en el inicio de sesión:', error);
      }
   };
      
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const [isLoggedIn, setIsLoggedIn] = useState(true);

   function logout () {
      setIsLoggedIn(false);
      navigate('/');
   }
   

   return (
      <div className='App'>
         <Nav onSearch={onSearch} logout={logout}/>
         <Routes>
            <Route path='/' element={<Form login={login} serverLoginError={serverLoginError} />}></Route>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/> } />
            <Route path='/about' element={<About />}></Route>
            <Route path='/detail/maia' element={<AboutDetail />}></Route>
            <Route path='/detail/:id' element={<Detail />}></Route>
            <Route path='/favorites' element={<Favorites />}></Route>
         </Routes>
      </div>
   );
}

export default App;
