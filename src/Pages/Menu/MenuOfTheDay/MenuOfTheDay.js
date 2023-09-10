import React from 'react';
import ListItem from "../../../components/ListItem/ListItem";

import './MenuOfTheDay.css';

import image1 from "../../../assets/fivejiveout.jpg";
import image2 from "../../../assets/steak.jpg";

const menuData = [
  {
    title: "Five Jive with free Coke",
    description: "meat filled sandwiches, 3 meats, and fries ",
    price: "249.99",
    img: image1,
  },
  {
    title: "Box for one",
    description: "with ribs, wings, coleslaw & chips",
    price: "249.99",
    img: image2,
  },
];

const MenuOfTheDay = () => {

  return (
    <div className="section">
      <div className="container menu-of-the-day">
        <h1 className="heading-secondary">
        our exclusive <span>specials</span>
        </h1>
        {menuData.map((data, i) => (
          <ListItem
            title={data.title}
            description={data.description}
            price={data.price}
            itemImage={data.img}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuOfTheDay