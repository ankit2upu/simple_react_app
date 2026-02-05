import React from 'react'
import "./Campus.css"
import gallery_1 from '../../assets/campus1.png'
import gallery_2 from '../../assets/campus2.png'
import gallery_3 from '../../assets/campus3.png'
import gallery_4 from '../../assets/campus4.png'
import white_arrow from '../../assets/white-arrow.png'


function handleClick(){
  window.location="https://knit.ac.in/en/article/photo";
  // window.open("https://knit.ac.in/en/article/photo");
 }
const Campus = () => {
  return (
    <div className='campus'>
        <div className='gallery'>

            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />

        </div>
        <button  onClick={handleClick} className='btn dark_btn'>See more here<img src={white_arrow} alt="" /></button>
      
    </div>
  )
}

export default Campus

