import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Raqeeb Khan</h2>
            <p>
                Passionate Frontend Developer | Transforming Ideas Into Seamless and Visually Stunning Web Solutions
            </p>
        </div>

        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                    <img src="./Images/icons8-react-native.svg" alt="" />
                </div>
                    <img className="rr" src="./Images/dp1.jpg" alt="" />
            </div>
                
            <div>
                <div className='tech-icon'>
                    <img src="./Images/icons8-html.svg" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="./Images/icons8-css.svg" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="./Images/icons8-js.svg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;
