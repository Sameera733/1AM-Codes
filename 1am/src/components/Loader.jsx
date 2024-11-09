import React from 'react'
import loader from "../assets/1am-loader.gif"
import "../styles/Loader.css"
function Loader() {
  return (
    <>
    <div className='loader'>
        <img src={loader} alt="loader" />
    </div>
    </>
  )
}

export default Loader