import React from 'react'
import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/sloppypasta.jpg";
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import AddToCart from './AddToCart/AddToCart'

const Delivery = () => {
  return (
    <div>
      <HeroImage
        bgImage={bgImage}
        heading={["eat at ", <span>Home or Work</span>]}
        text="Delivery avialable Mon - Sun, 11:00 am - 18:00 pm"
      />
      <DeliveryInfo />
      <AddToCart />
    </div>
  )
}

export default Delivery