import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "bcbe894b-7241-4de3-b150-c7f4cdb4315e");
  
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
    <div className='contact' name='contact'>
        <div className="contact-col">
             <h3>Send Us Message  <img src={msg_icon} alt="" className="src" /></h3>
             <p> Feel free to reach out through the contact form or find our contact 
                information below. Your feedback questions and suggestions are valuable 
                to us as we strive to provide the exceptional services to our university 
                community 
             </p>
             <ul>
                <li> <img src={mail_icon} alt="" />tejaskamble0208@gmail.com</li>
                <li> <img src={phone_icon} alt="" /> +91 9119448544 </li>
                <li> <img src={location_icon} alt="" /> Pune, India</li>
             </ul>
        </div>
        <div className="contact-col">
             <form onSubmit={onSubmit}>

                <label> Your Name </label>
                <input type="text" name="name" placeholder='Enter Your Name' required />

                <label> Phone Number </label>
                <input type="tel" name="phone" placeholder='Enter Your Mobile Number' required />
                
                <label> Your Message  </label>
                <textarea name='message' rows='6' placeholder='Write Your Message' required ></textarea>

                < button type='submit' className='btn dark-btn'>Submit Now  <img src={white_arrow} alt="" /></button>


             </form>
             <span>
                {result}
             </span>
        </div>
    </div>
  )
}

export default Contact