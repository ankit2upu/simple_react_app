import React from "react";
import "./about.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
  

 function handleClick(){

  window.location="https://knit.ac.in/en/";
  // window.open("https://knit.ac.in/en/");
 }


const About = ({ setPlayState }) => {
  return (
    <div className="about"   >
      <div className="about_left" onClick={handleClick} >
        <img src={about_img} alt="" className="about_img"   />
        <img
        
          src={play_icon}
          alt=""
          className="play_icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>

      <div className="about_right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Kamla Nehru Institute of Technology (KNIT), Sultanpur is one of the
          premier government technical institutes of Uttar Pradesh. Established
          in 1976, the institute is named after Kamla Nehru and is known for its
          strong academic culture, disciplined environment, and focus on quality
          technical education.
        </p>
        <p>
          KNIT is autonomous and affiliated to Dr. A.P.J. Abdul Kalam Technical
          University (AKTU), Lucknow. The institute offers undergraduate,
          postgraduate programs in engineering, technology, and
          management, including B.Tech, M.Tech, MCA,programs.
        </p>
      </div>
    </div>
  );
};

export default About;
