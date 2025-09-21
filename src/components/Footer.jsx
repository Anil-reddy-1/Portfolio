import React from 'react'
import X from '../assets/X.png'
import Insta from '../assets/Instagram.png'
import Linkedin from '../assets/Linkedin.png'
import './styles/Footer.css'
import { useGSAP } from '@gsap/react'
import gsap from  'gsap';


function Footer() {
  useGSAP(()=>{
    const timeline =gsap.timeline({start:'top top'})
    timeline.to('.wf-footer',{
      y:500,
      opacity:0,
    });
    timeline.to('.wf-footer',{
      y:-200,
      ease:"bounce.inOut"
    })
    timeline.to('.wf-footer',{
      y:0,
      ease:'backin'
    })
  },[])
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