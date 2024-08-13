import { faFacebookF,faWhatsapp,faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import './contact.css'
import CircleButton from '../CircleButton/CircleButton'

const Contact = () => {
    const handleClick = (url)=>{
        window.open(url, '_blank');
    }
  return (
    <section className='contact' id='contact'>
        <h2 className="text-center heading mb-0" style={{"fontFamily": "cursive",}}> &nbsp; Connect me on.</h2>
        <h5 className='mt-4'>Fell free to connect on these sites.</h5>
        <div className='icon-button-container py-4'>
            <CircleButton icon={faWhatsapp} onClick={()=>handleClick('https://wa.me/8900029410')} />
            <CircleButton icon ={faLinkedinIn} onClick={()=>handleClick('https://www.linkedin.com/in/arkaprota-ghosh-a0506521a/')} />
        <a href='mailto: ghosharkaprota5@gmail.com'>
        <CircleButton icon={faEnvelope}  />
        </a>
        </div>
      <div>
        <h4>And if you are not able to wait then I am just a call away.</h4>
        <button className='outline-button mt-4'><a href="tel:+918900029410">+91-8900029410</a></button>
      </div>
    </section>
  )
}

export default Contact