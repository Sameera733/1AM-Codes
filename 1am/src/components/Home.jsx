import React from 'react';
import am from "../assets/Creators.svg";
import "../styles/home.css";
import arr from "../assets/arrow.svg";
import line from "../assets/line.svg";


const Home = () => {
 

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
       <nav className="navbar">
  <ul className="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">Build</a></li>
    <li><a href="#">Deploy</a></li>
  </ul>
</nav>
</nav>
      <div className="container">  
        <div className="hero">
          <p 
            
          >
            REVOLUTIONIZE <br/> YOUR CODING WITH
          </p>
          <img 
            src={am} 
            alt="Hero" 
         
          />
        </div>
        <h6 
          
        >
          Scroll to Explore
        </h6>
        <div className="arrow">
          <img src={line} alt="Line" />
          <img src={arr} alt="Arrow" />
        </div>
      </div>
     
    </>
  );
}

export default Home;
