import style from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({onSearch}) {
  const [id, setId] = useState("");
  
  const handleChange = (event) => {
   setId(event.target.value);
  };

  const clearInput = () => {
   setId("");
  }

  return (
      <div className={style.container}>
         <input type='search' className={style.search_input} onChange={handleChange} value={id}/>
         <button className={style.search_button} 
           onClick={() => {
            onSearch(id);
            clearInput();
           }}>Agregar</button> 
      </div>
   );
}
   

