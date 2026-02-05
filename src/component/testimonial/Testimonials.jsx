import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next_btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back_btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={user_1} alt="" />
                <div className="user_1_name">
                  <h3>Ankit Gupta</h3>
                  <span>knit, INDIA</span>
                </div>
              </div>
              <p>
                <span><h3>🎓 Ankit Kumar Gupta</h3></span> MCA Final Year, KNIT Sultanpur “My journey
                at Kamla Nehru Institute of Technology.The institute provides a strong academic foundation
                along with excellent guidance from experienced faculty members.
                The supportive environment and practical exposure have helped me
                grow both professionally and personally. I am proud to be a
                student of KNIT Sultanpur.”
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={user_2} alt="" />
                <div className="user_1_name">
                  <h3>Abhishek Verma</h3>
                  <span>knit, INDIA</span>
                </div>
              </div>
              <p>
                <span><h3>🎓 Abhishek Verma</h3></span> MCA Final Year, KNIT Sultanpur “KNIT Sultanpur
                has played a significant role in shaping my technical skills and
                overall personality. The faculty members are highly
                knowledgeable and always encourage innovation and discipline.
                The learning atmosphere here has prepared me well for future
                professional challenges.I am proud to be a
                student of KNIT Sultanpur”
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={user_3} alt="" />
                <div className="user_1_name">
                  <h3>Harsh Mishra</h3>
                  <span>knit, INDIA</span>
                </div>
              </div>
              <p>
                <span><h3>🎓 Harsh Mishra</h3></span> “The academic culture and disciplined
                environment at KNIT Sultanpur motivate students to strive for
                excellence. The institute focuses not only on academics but also
                on developing confidence, teamwork, and problem-solving skills 
                along with excellent guidance from experienced faculty.
                My experience here has been extremely valuable.I am proud to be a
                student of KNIT Sultanpur”
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={user_4} alt="" />
                <div className="user_1_name">
                  <h3>Tushar Raman</h3>
                  <span>knit, INDIA</span>
                </div>
              </div>
              <p>
                <span><h3>🎓 Tushar Raman</h3></span> “Studying at KNIT Sultanpur has been a rewarding
                experience. The well-structured curriculum, supportive teachers,
                and focus on practical learning have helped me enhance my
                technical knowledge and career readiness along with excellent guidance . I am grateful for the
                opportunities and guidance provided by the institute.I am proud to be a
                student of KNIT Sultanpur”
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
