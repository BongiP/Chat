import React from 'react'

import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-img container'>
        <div className='hero-content'>
            <h1 className='heading-primary'><span>welcome</span> to the food hut</h1>

            <p className='text-white'>The best fast food in the kingdom of eswatini</p>
            <p className='text-white'>Book online or call <span  className='special-number'>(+268) 78124485/ 78619303</span></p>
        </div>
    </div>
  )
}

export default Hero