import React from 'react'
import './Gallery.css'

import imageItem1 from "../../../assets/burger.jpg";
import imageItem2 from "../../../assets/sloppy-pasta.jpg";
import imageItem3 from "../../../assets/pizza.jpg";
import imageItem4 from "../../../assets/burgerchips.jpg";
import imageItem5 from "../../../assets/cheefserve.jpg";
import imageItem6 from "../../../assets/cheesychips.jpg";
import imageItem7 from "../../../assets/chillistrips.jpg";
import imageItem8 from "../../../assets/fatburger.jpg";
import imageItem9 from "../../../assets/fivejivein.jpg";
import imageItem10 from "../../../assets/nibbles.jpg";
import imageItem11 from "../../../assets/patty.jpg";
import imageItem12 from "../../../assets/pepperoni.jpg";
import imageItem13 from "../../../assets/fivejiveout.jpg";
import imageItem14 from "../../../assets/russian.jpg";
import imageItem15 from "../../../assets/sandwich.jpg";
import imageItem16 from "../../../assets/smallburger.jpg";
import imageItem17 from "../../../assets/steak.jpg";
import imageItem18 from "../../../assets/stickystrips.jpg";
import imageItem19 from "../../../assets/bg.jpg";

const Gallery = () => {
  return (
    <div className='gallery'>
        <figure className='gallery__item gallery__item-1'>
            <img src={imageItem1} alt="Gallery 1" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-2'>
            <img src={imageItem2} alt="Gallery 2" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-3'>
            <img src={imageItem3} alt="Gallery 3" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-4'>
            <img src={imageItem4} alt="Gallery4" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-5'>
            <img src={imageItem5} alt="Gallery 5" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-6'>
            <img src={imageItem6} alt="Gallery 6" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-7'>
            <img src={imageItem7} alt="Gallery 7" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-8'>
            <img src={imageItem8} alt="Gallery 8" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-9'>
            <img src={imageItem9} alt="Gallery 9" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-10'>
            <img src={imageItem10} alt="Gallery 10" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-11'>
            <img src={imageItem11} alt="Gallery 11" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-12'>
            <img src={imageItem12} alt="Gallery 12" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-13'>
            <img src={imageItem13} alt="Gallery 13" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-14'>
            <img src={imageItem14} alt="Gallery 14" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-15'>
            <img src={imageItem15} alt="Gallery 15" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-16'>
            <img src={imageItem16} alt="Gallery 16" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-17'>
            <img src={imageItem17} alt="Gallery 17" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-18'>
            <img src={imageItem18} alt="Gallery 18" className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item-19'>
            <img src={imageItem19} alt="Gallery 19" className='gallery__img' />
        </figure>

    </div>
  )
}

export default Gallery