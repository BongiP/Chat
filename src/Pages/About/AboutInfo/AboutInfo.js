import React from "react";

import "./AboutInfo.css";

const AboutInfo = () => {
  return (
    <div className="section">
      <div className="container grid-container">
        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              A few words <span>about us</span>
            </h2>

            <h4>Let us introduce ourselves</h4>

            <p>
            Welcome to The Food Hut, the best fast food restaurant in the kingdom of Eswatini (Swaziland). 
            We are a family-owned and operated business that started in 2018 with a vision to provide 
            delicious and affordable food to our customers. 
            We are passionate about{" "}
              <span className="special-word">quality</span> service, and customer satisfaction. 
              We use fresh and local ingredients to make our fast food dishes, such as burgers, 
              chicken strips, cheesy chips, Russians, pizza, and more. 
              We also have a variety of drinks, desserts, and snacks to{" "}
              <span className="special-word">satisfy,</span> your cravings.
            </p>

            <blockquote>
            Whether you want a quick bite or a satisfying meal, we have something for everyone. 
            </blockquote>

            <p>
            We are not just a fast food restaurant. We are also a great entertainment destination. 
            We have a{" "}
              <span className="special-word">friendly</span> and welcoming atmosphere that will make you feel at home.
               Come and join us at The Food Hut, where you can have amazing meals and great entertainment.
            </p>
          </div>
        </div>

        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              A PLACE TO RELAX, A PLACE <span>TO INDULGE</span>
            </h2>

            <h4>We hope to see you soon!</h4>

            <p>
            If you are looking for a place to {" "}
              <span className="special-word">celebrate </span>If you are looking for a place to celebrate 
              your birthday or work lunch with your colleagues or friends, we are the perfect choice for you. 
              Come and join us at The Food Hut, where you can have amazing meals and great entertainment.
            </p>

            <blockquote>
              You can book a table online or by phone and enjoy our special offers and discounts.
            </blockquote>

            <p>
              You can also order catering services for any occasion and get your 
              food delivered to your location.
              Checkers Mbabane is the best place to wine and dine in the kingdom!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;