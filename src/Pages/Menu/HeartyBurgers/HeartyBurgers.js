import React from 'react'
import ListItem from "../../../components/ListItem/ListItem";
import coffeeImage from "../../../assets/fatburger.jpg";

import './HeartyBurgers.css'

const menuDataRight = [
  {
    title: "Hutty Burger",
    description: "Combo with fries and a drink",
    price: 99.99,
  },
  {
    title: "Jalapeno Burger",
    description: "Combo with fries and a drink",
    price: 103.99,
  },
  {
    title: "Chilli Bomb Burger",
    description: "Combo with fries and a drink",
    price: 106.99,
  },
  {
    title: "Smokey Burger",
    description: "Combo with fries and a drink",
    price: 114.99,
  },
  {
    title: "Avo Squash Burger",
    description: "Combo with fries and a drink",
    price: 116.99,
  },
  {
    title: "Lay On Me (egg) Burger",
    description: "Combo with fries and a drink",
    price: 116.99,
  },
  {
    title: "Kass Burger",
    description: "Combo with fries and a drink",
    price: 119.99,
  },
  {
    title: "Purple Rooster burger",
    description: "Combo with fries and a drink",
    price: 122.99,
  },
  {
    title: "Kota Burger",
    description: "Combo with fries and a drink",
    price: 122.99,
  },
  {
    title: "Double Bacon Burger",
    description: "Combo with fries and a drink",
    price: 124.99,
  },
  {
    title: "Fat Burger",
    description: "Combo with fries and a drink",
    price: 139.99,
  },
  {
    title: "Monster Burger",
    description: "Combo with fries and a drink",
    price: 139.99,
  },
];

const HeartyBurgers = () => {
  return (
    <div className="container hearty-burgers">
      <h1 className="heading-secondary">
      Hearty <span>Burgers</span>
      </h1>

      <div className="grid-container">
        <div>
          <img src={coffeeImage} alt="coffee items" />
        </div>

        <div>
          {menuDataRight.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeartyBurgers