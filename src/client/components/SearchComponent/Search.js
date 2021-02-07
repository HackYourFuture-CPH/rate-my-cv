import React , {useState} from 'react';
import search from '../../assets/images/SearchIcon.svg';
import  './Search.styles.css';

export default function Search() {
    const [searchText, setSearchText] = useState("");
    const handleChange = (event)=> {
        setSearchText(event.target.value);
      };
  return (
    <div>
    <div className="search">
     <img className="image" src={search} alt="search icon" />
       <input className= "input-search"
        type="text"
        placeholder="Search by name, job title or date"
        onChange={handleChange}
       />
      </div>
      <h4>{searchText}</h4>
    </div>
  );
}
