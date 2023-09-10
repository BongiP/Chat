import React from 'react'
import ListItem from "../../../components/ListItem/ListItem";

import './Beverages.css'

const menuDataLeft = [
  {
    title: "Cone Ice Cream With Topping",
    price: 19.99,
  },
  {
    title: "Vanilla Shake",
    price: 36.99,
  },
  {
    title: "Chocolate Shake",
    price: 38.99,
  },
  {
    title: "Strawberry Shake",
    price: 38.99,
  },
];

const menuDataMiddle = [
  {
    title: "Oreo Shake",
    price: 46.99,
  },
  {
    title: "Insane Shake (Oreo + KitKat)",
    price: 54.99,
  },
  {
    title: "Still Water",
    price: 10.99,
  },
  {
    title: "Sparkling Water",
    price: 14.99,
  },
];

const menuDataRight = [
  {
    title: "Cold fizzy drinks",
    price: 16.99,
  },
  {
    title: "100% fruit juice",
    price: 17.99,
  },
  {
    title: "Kota tonic & Lemonade",
    price: 36.99,
  },
  {
    title: "Passion & Lemonade",
    price: 36.99,
  },
];

const Beverages = () => {
  return (
    <div className="section">
      <div className="container beverages">
        <h1 className="heading-secondary">
        Non Alcoholic <span> Beverages</span>
        </h1>

        <div className="grid-container">
          <div>
            {menuDataLeft.map((data, i) => (
              <ListItem
                key={i}
                title={data.title}
                description={data.description}
                price={data.price}
              />
            ))}
          </div>

          <div>
            {menuDataMiddle.map((data, i) => (
              <ListItem
                key={i}
                title={data.title}
                description={data.description}
                price={data.price}
              />
            ))}
          </div>

          <div>
            {menuDataRight.map((data, i) => (
              <ListItem
                key={i}
                title={data.title}
                description={data.description}
                price={data.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beverages