import React from 'react'

import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/stall.jpg";

import ContactForm from './ContactForm/ContactForm'

const Contact = () => {
  return (
    <div>
      <HeroImage
        bgImage={bgImage}
        heading={["contact ", <span>us</span>]}
        text="Feel free to contact us"
      />
      <ContactForm />
    </div>
  )
}

export default Contact