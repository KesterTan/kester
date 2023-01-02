import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {FaTelegram} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const userID = process.env.REACT_APP_USER_ID;

const Contact = () => {
  const form = useRef();
  console.log(process.env.REACT_APP_TEMPLATE_ID);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
          console.log("Successful");
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();

  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kestertan@cmu.edu</h5>
            <a href="mailto: kestertan@cmu.edu" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
            <FaTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@kestertann</h5>
            <a href="https://telegram.me/kestertann" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Kester Tan</h5>
            <a href="https://www.linkedin.com/in/tankester/" target="_blank">Send a Message</a>
          </article>

        </div>
        
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name ='name' placeholder='Your Full Name' required />
          <input type='text' name ='name' placeholder='Your Full Name' required />
          <textarea name='message' placeholder='Your Message' rows='7'></textarea>
          <button type='submit' className='btn btn=primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact