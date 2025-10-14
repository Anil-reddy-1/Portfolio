import React from 'react'
import './styles/About.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


function About() {


  useGSAP(()=>{
    const timeline = gsap.timeline({
      scrollTrigger:{
        trigger:'.about-section',
        start:'top 70%',
        end:'bottom 90%',
        scrub:true,
      }
    }
    )

    timeline.fromTo('.sec1',{
      y:20,
      opacity:0,
      

    },{
      y:0,
      opacity:1,
      ease:'power1.in '  
    })

    timeline.fromTo('.discription ,.discription button',{
      x:-100,
      opacity:0,
     
    },{
      x:0,
      opacity:1,
      
    });

    timeline.fromTo('.links',{
      x:100,
      opacity:0,
      
    },{
      x:0,
      opacity:1,
      ease:'power1.in'
    })
    timeline.fromTo('.link-list li',{
      y:20,
      opacity:0,
 
      ease:'expo.in'
    },{
      y:0,
      opacity:1,
      stagger:0.05 
    })

  },[])

  return (
    <div className='about-section section ' id='about'>
        <h2 className='Tittle'>About Me</h2>
           <div className="sec1">
            <div className="name">
              <h3>Patti Anil Reddy</h3>
            </div>
            <div className="edstatus">
              <h4>Pursuing Btech (currently 2nd year)</h4>
            </div>
           </div>
           <div className="sec2">
            <div className="discription">
              <p>
                 I'm a dedicated Computer Science Engineering student with
                  exceptional academic performance and hands-on experience in modern web technologies.
                   My journey started with mastering programming fundamentals in Java and Python, 
                   evolving into full-stack development with React.js and React Native. <br />
                  I've successfully built responsive e-commerce platforms, cross-platform mobile applications,
                   and integrated real-time APIs. With a strong foundation in problem-solving and quick learning ability, I'm passionate about creating user-centric applications that make a difference. My goal is to build a successful career in a challenging environment where I can apply my skills and contribute to organizational success.
               </p>
              <button className='contact-button'>Contact me</button>
            </div>
            <div className="links">
              <h3>Connect With Me</h3>
              <ul className='link-list'>
                <li>Email: <a href="mailto:anilreddy5251@gmail.com" className='link'>anilreddy5251@gmail.com</a></li>
                <li>GitHub: <a href="https://github.com/Anil-reddy-1/" className='link'>Anil-reddy-1</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/anil-reddy-546430331/" className='link'>Patti Anil Reddy</a></li>
                <li>Resume: <a href="" className='link'>resume</a></li>
                
              </ul>
              </div>
           </div>

    </div> 
  )
}

export default About