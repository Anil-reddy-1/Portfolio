import React from 'react'
import './styles/About.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
function About() {


  useGSAP(()=>{
    const timeline = gsap.timeline({
      scrollTrigger:{
        trigger:'.about-section',
        start:'top 70%',
        end:'bottom top',
        
      }
    }
    )

    timeline.fromTo('.sec1',{
      y:20,
      opacity:0,
      duration:0.5,

    },{
      y:0,
      opacity:1,
      ease:'power1.in '  
    })

    timeline.fromTo('.discription ,.discription button',{
      x:-100,
      opacity:0,
      duration:1,
    },{
      x:0,
      opacity:1,
      
    });

    timeline.fromTo('.links',{
      x:100,
      opacity:0,
      duration:1,
    },{
      x:0,
      opacity:1,
      ease:'power1.in'
    })
    timeline.fromTo('.link-list li',{
      y:20,
      opacity:0,
      duration:.7,
      ease:'expo.in'
    },{
      y:0,
      opacity:1,
      stagger:0.05
    })

  },[])

  return (
    <div className='about-section section ' id='about'>
        <h2 className='headings'>About Me</h2>
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque excepturi deleniti,
                 tempora voluptates exercitationem quas. Ea id repudiandae blanditiis officiis neque eaque repellendus
                  corrupti omnis recusandae quaerat numquam cum quibusdam dolorum dolores ipsam nostrum odio sed quisquam ducimus, 
                beatae quae rem. Voluptatem, suscipit at magni animi commodi iure pariatur accusamus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rem voluptatum consequuntur sunt similique laudantium, expedita unde
                 ullam ratione consectetur cum aspernatur. Maiores laborum porro incidunt reiciendis amet sapiente inventore.
              </p>
              <button className='contact-button'>Contact me</button>
            </div>
            <div className="links">
              <h3>Connect With Me</h3>
              <ul className='link-list'>
                <li>Github: <a href="" className='link'>anil-reddy-1</a></li>
                <li>Linkedin: <a href="" className='link'>Patti Anil Reddy</a></li>
                <li>LeetCode: <a href="" className='link'>anil-reddy</a></li>
                <li>Resume: <a href="" className='link'>resume</a></li>
                
              </ul>
              </div>
           </div>

    </div> 
  )
}

export default About