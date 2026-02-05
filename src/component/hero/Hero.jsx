import React, { useState } from "react";
import "./Hero.css";
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
 const [set, setNew]=useState("")
 function handleClick(){
  window.location="https://knit.ac.in/en/page/campus-facilities2";
  // window.open("https://knit.ac.in/en/page/campus-facilities2","_blank");

 }

  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
         <p>
        Our cutting-edge curriculum is designed to empower students with the
        knoledge, skill and experiences needed to excel in the dynamic field of
        education
      </p>
      <button className="btn "   onClick={handleClick} >Explore more <img src={dark_arrow}  /></button>
      </div>
     
    </div>
  );
};
  
export default Hero;
