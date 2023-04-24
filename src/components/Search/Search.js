import React, {useRef ,useEffect} from 'react'
import {FaSearch} from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import "./Search.css";



function Search() {
  const {setSearchTerm ,setResultTitle}=useGlobalContext();
  const searchText = useRef("");
  const navigate = useNavigate();

  useEffect(()=>searchText.current.focus(),[]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something")
    }else{
      setSearchTerm(searchText.current.value);
    }
  }

  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-sb bg-white">
              <input
                type="text"
                className="form-control"
                placeholder="Explore the vehicles... "
                ref={searchText}
              />
              <button className="flex flex-c" type="submit">
                <FaSearch className="text-blue" size={32} onClick={handleSubmit} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search