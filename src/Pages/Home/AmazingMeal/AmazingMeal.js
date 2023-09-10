import React, { useState } from 'react'

import './AmazingMeal.css'

import image1 from "../../../assets/fivejivein.jpg";
import image2 from "../../../assets/chillistrips.jpg";
import image3 from "../../../assets/cheesychips.jpg";
import image4 from "../../../assets/nibbles.jpg";
import image5 from "../../../assets/patty.jpg";
import image6 from "../../../assets/pizza.jpg";
import bg from "../../../assets/bg.jpg";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsFillStarFill } from "react-icons/bs";

const AmazingMeal = () => {

    const [items] = useState([
      { id: 1, url: image1 },
      { id: 2, url: image2 },
      { id: 3, url: image3 },
      { id: 4, url: image4 },
      { id: 5, url: image5 },
      { id: 6, url: image6 },
    ]);
  

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
     };

  return (
    <div className="section">
      <div className="container">
        <div className="amazing-container">
          <div className="amazing-carousal">
            <div>
              <Slider {...settings}>
                {items.map((item) => (
                  <div key={item.id}>
                    <img src={item.url} alt="caurosal pic" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="amazing-content">
            <h2 className="heading-secondary">
              Amazing meals <span className="ampersand">&#38;</span>
              <br />
              <span>
                Great <br /> Entertainment
              </span>
            </h2>

            <h4>We hope to see you soon!</h4>

            <p>
            Are you looking for a place to enjoy delicious fast food and have fun with your friends and family? 
            Look no further than the food hut, the best fast food restaurant in the kingdom! We offer 
            a variety of mouth-watering burgers, chicken strips, cheesy chips, Russians, and more. 
            You can also try our pizza, made with fresh ingredients and baked to perfection. 
            Whether you want a quick bite or a satisfying meal, we have something for everyone.

              <br />
              <br />
              But we are not just a fast food restaurant. We are also a great entertainment destination. 
              You can watch your favorite sports on our big screens, play games in our arcade, 
              or listen to live music from local artists. 
              We have a friendly and welcoming atmosphere that will make you feel at home.
            </p>

            <blockquote>
            Come and join us and have amazing meals and great entertainment.
            </blockquote>
          </div>
        </div>

        <div className="amazing-card-container">
          <div className="amazing-card amazing-card-left">
            <img src={image1} alt="five_jive" className="amazing-card-image" />

            <div className="amazing-card-content">
              <div className="amazing-card-title">
                <BsFillStarFill color="#c3512f" />
                <h3 className="heading-tertiary">
                  the best <span>ingredients</span>
                </h3>
              </div>

              <p>
                We don't compromise on quality and flavour. Our fast food dishes are 
                made with fresh and local ingredients that deliver great taste.
              </p>
            </div>
          </div>

          <div className="amazing-card amazing-card-right">
            <img src={bg} alt="russian_&_chips" className="amazing-card-image" />

            <div className="amazing-card-content">
              <div className="amazing-card-title">
                <BsFillStarFill color="#c3512f" />
                <h3 className="heading-tertiary">
                  <span>reservations</span>
                </h3>
              </div>

              <p>
                To book a table at the food hut, please call our numbers or 
                fill out the online form on our website. We look forward to serving you soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazingMeal