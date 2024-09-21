import React from 'react'
import StarUs from '../Buttons/StarUs'
import GetStarted from '../Buttons/GetStarted'


function HeroContent() {
  return (
    <div className="hero-content">
      <div className="content-wrapper">
        <div className="text-container">
          <h1 className="hero-title">
            AI Infused Vision Directory
          </h1>
          <p className="hero-description">
            Explore the world of AI and Machine Learning with next level Computer Vision projects, dive into <strong>open-source</strong> project directory now!
          </p>
          <div className="button-container">
            <div className="button-wrapper">
              <StarUs />
            </div>
            <div className="button-wrapper">
              <GetStarted />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroContent

