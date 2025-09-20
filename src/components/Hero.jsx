import React from 'react'
import './styles/Hero.css'



function Hero() {
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