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
   
   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
         if (data.name) {
            const existe = characters.find(character => parseInt(character.id) === parseInt(id))
            if (!existe) {
               setCharacters((oldChars) => [...oldChars, data])
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      }
   );
   }

   const onClose = (id) => {
      const nuevaLista = characters.filter ((character)=> parseInt(character.id) !== parseInt(id))
      setCharacters(nuevaLista)
   }

   const [access, setAccess] = useState(false);
   const navigate = useNavigate();
   const EMAIL = 'polismai@gmail.com'
   const PASSWORD = 'asd123'

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

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
            <Route path='/' element={<Form login={login}/>}></Route>
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
