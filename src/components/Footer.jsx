import React from 'react'
import X from '../assets/X.png'
import Insta from '../assets/Instagram.png'
import Linkedin from '../assets/Linkedin.png'
import './styles/Footer.css'
import { useGSAP } from '@gsap/react'
import gsap from  'gsap';
import GitHub from '../assets/skillLogos/GitHub.png'


function Footer() {
  
  return (
    <footer className="wf-footer">
      <div className="buttons">
        <a href="https://x.com/AnilReddy136" target='blank'>
          <img src={X} alt="X" className='bottom-image'/>
        </a>
        <a href="https://www.linkedin.com/in/anil-reddy-546430331/" target='blank'>
          <img src={Linkedin}alt="Linked in" className='bottom-image' />
        </a>
        <a href="#">
          <img src={Insta} alt="Insta" className='bottom-image' />
        </a>
        <a href="https://github.com/Anil-reddy-1" target='blank'>
          <img src={GitHub} alt="Mail" className='bottom-image'/>
        </a>
      </div>
      <div className="bottom">
           © {new Date().getFullYear()} Anil Reddy
      </div>
       
    </footer>
  )
}

export default Footer