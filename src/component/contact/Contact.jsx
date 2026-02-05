import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {


   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8a84877f-eb8f-46a7-9641-618b3d986e12");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

 
  return (
    <div className='contact'>
        <div className="contact_col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact from or find our contact information below.
                Your feedback, question, and suggestions are important to us as we strive to provide
               exceptional service to our university community. 
            </p>
            <ul>
                <li> <img src={mail_icon} alt="" />  Ankitgpt2345@gmail.com</li>
                <li> <img src={phone_icon} alt="" />  +918887666362 </li>
                <li> <img src={location_icon} alt="" /> Athilapura post athila Rasra, Ballia Uttar pradesh</li>
            </ul>
        </div>
        <div className=" contact_col contact_col_right">
          <form  onSubmit={onSubmit}>
            <label htmlFor="">Your Name</label>
            <input type="text"  name='name' placeholder='Enter your name' required/>
           
            <label htmlFor="">Phone number</label>
            <input type="tel" name='phone' placeholder='Enter your phone number' required />
           
            <label htmlFor="">Write Your message here</label>
            <textarea name="messege" id=""  rows="6"  required placeholder='Enter your messege here.. ' > </textarea>
            <button type='submit' className='btn dark_btn'>Submit  now <img src={white_arrow} alt="" /> </button>


          </form>
          <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact
