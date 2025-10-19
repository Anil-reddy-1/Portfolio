import React, { useContext } from 'react'
import './styles/Hero.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { ThemeContext } from '../contexts/ThemeContext.tsx';
 
function Hero() {
 
  useGSAP(() => {
    const timeline = gsap.timeline({})
    const greeting = new SplitText(".greeting",{type:'chars,words'});
    timeline.fromTo('.hero-img',{
      opacity:0,
      y:350,
      duration:1.5,
      ease:'power1.out'
    },{
      opacity:1,
      y:0,
      
    });

    timeline.fromTo('.hero-discript',{
      opacity:0,
      x:350,
      duration:1.5,
    },{
      opacity:1,
      x:0,
    });

    gsap.fromTo(greeting.chars,{
      opacity:0,
      y:-20,
    },{
      opacity:1,
      y:0,
      duration:1,
      delay:0.7,
      stagger:0.05,
      ease:'power1.out'
    },"-=1");
    
    gsap.fromTo('.toggle-button',{
      y:-60,
      opacity:0,
      duration:1.4,
      ease:"bounce.inOut",
    },{
      y:0,
      opacity:1,
    })
  }, [])

  const Theme=useContext(ThemeContext);
  function toggle(){
    if(Theme.theme=='Dark'){
      Theme.setTheme("Bright");
    }else{
      Theme.setTheme("Dark");
    }
  }


  return (
    <div className="hero-section section">
          <div className={Theme.theme=='Dark'?'toggle-button Bright':'toggle-button Dark'}><button onClick={toggle}>Brightmode</button></div>
            <div className="hero-img">
              <img src="" alt="My Picture"  />
            </div>
            <div className="hero-discript">
              <h3 className='greeting'>Hi, I'm Patti Anil Reddy </h3>
              <p className='hero-discription'>
                   I'm a Computer Science student at Vardhaman College of Engineering with a strong academic record (9.4 CGPA) and a passion for building modern web and mobile experiences.  
                 Skilled in <b>React.js</b>, <b>React Native</b>, and <b>JavaScript</b>, I focus on crafting fast, responsive, and user-friendly applications.  
                 From developing <b>e-commerce platforms</b> to creating <b>real-time mobile apps</b>, I enjoy turning creative ideas into impactful digital solutions while exploring the latest in full-stack development.
              </p>
                           
                
                <button href="#contact" className="contact-button">contact</button>
              
            </div>
            
          </div>
  )
}

export default Hero