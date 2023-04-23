import React from 'react'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import  "./Header.css"

function Header() {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">Discover Space's Best Vehicles</h2><br />
          <p className="header-text fs-18">
            May the force be with you !
          </p>
          <Search/>
        </div>
      </header>
    </div>
  );
}

export default Header