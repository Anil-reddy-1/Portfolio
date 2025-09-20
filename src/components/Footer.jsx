import React from 'react'
import X from '../assets/X.png'
import Insta from '../assets/Instagram.png'
import Linkedin from '../assets/Linkedin.png'
import './styles/Footer.css'



function Footer() {
  return (
    <footer className="wf-footer">
      <div className="buttons">
        <a href="">
          <img src={X} alt="" className='bottom-image'/>
        </a>
        <a href="">
          <img src={Linkedin}alt="" className='bottom-image' />
        </a>
        <a href="">
          <img src={Insta} alt="" className='bottom-image'/>
        </a>
        <a href="">
          <img src="" alt="" className='bottom-image'/>
        </a>
      </div>
      <div className="bottom">
           © {new Date().getFullYear()} Anil Reddy
      </div>
       
    </footer>
  )
}

export default Footer