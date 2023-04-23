import React from 'react'
import {FaSearch} from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import "./Search.css";


function Search() {
  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form">
            <div className="search-form-elem flex flex-sb bg-white">
              <input
                type="text"
                className="form-control"
                placeholder="Explore the vehicles... "
              />
              <button className="flex flex-c" type="submit">
                <FaSearch className="text-blue" size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search