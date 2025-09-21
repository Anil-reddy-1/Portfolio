import React from 'react'
import './styles/Hero.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { SplitText } from 'gsap/all';


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



  return (
    <div className="hero-section section">
          <div className='toggle-button'><button>Brightmode</button></div>
            <div className="hero-img">

            </div>
            <div className="hero-discript">
              <h3 className='greeting'>Hi Im Anil </h3>
              <p className='hero-discription'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  aliquid, quas quia aperiam fuga eveniet ipsam ea veritatis odio omnis
                   libero illo saepe harum aliquam illum minima esse culpa tempora rerum 
                   accusantium! At, libero repellat ex nisi fuga adipisci ab quisquam aut, 
                   voluptate ad earum doloribus nostrum illo vitae excepturi. Praesentium sapiente, 
                   magni eius quae sunt vel cum nam aliquid, fugiat cupiditate sit laboriosam reiciendis delectus
                   </p>
              
                
                <button className="contact-button">Secondary</button>
              
            </div>
            
          </div>
  )
}

export default Hero