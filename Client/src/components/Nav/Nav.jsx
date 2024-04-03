import style from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Nav = ({onSearch, logout}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const showNav = location.pathname !== '/';
  const handleLogout = () => {
    logout();
  }

  return (
  <>
    {showNav && (
        <div className={style.nav}> 
          <button onClick = {()=> navigate("/home")}>Home</button>  
          <button onClick = {()=> navigate("/about")}>About</button> 
          <button onClick = {()=> navigate(-1)}>Atras</button>
          <SearchBar onSearch={onSearch}/>  
          <button onClick={()=> navigate("/favorites")}>Favorites</button>
          <button onClick={handleLogout}>Log out</button>
        </div> )}
  </>
  )
};

export default Nav;