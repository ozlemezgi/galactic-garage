import React from 'react'
import loading from "../../images/loading.webp"
import "./Loader.css"

function Loader() {
  return (
    <div className='loader flex flex-c'>
      <img src="{loading}" alt="" />
    </div>
  )
}

export default Loader