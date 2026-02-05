import React, { useState } from 'react'
import Navbar from './component/navbar/Navbar'
import Hero from './component/hero/Hero'
import Program from './component/Program/Program'
import Title from './component/title/Title'
import About from './component/about/About'
import Campus from './component/campus/Campus'
import Testimonials from './component/testimonial/Testimonials'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'


const App = () => {

  const [playState,setPlayState]=useState(false);
 
 
  return (
    <div>
      
      <Navbar/>
      <Hero/>
      
      <div className="container">
        <Title subTitle='Our Program' title='What we Offer'/>
        <Program/>
         <About setPlayState={setPlayState} />
         <Title subTitle='Gallery' title='Campus Photo'/>
         <Campus/>
         <Title subTitle='TESTIMONIALS' title='What Student Says'/>
         <Testimonials/>
         <Title subTitle='Contact Us' title='Get in Touch'/>
         <Contact/>
         <Footer/>
      
      </div>
     
        {/* <VideoPlayer playState={playState} setPlayState={setPlayState} />  */}
      
    </div>
  )
}

export default App
