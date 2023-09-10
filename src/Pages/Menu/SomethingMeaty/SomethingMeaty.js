import React from 'react';
import ListItem from "../../../components/ListItem/ListItem";

import './SomethingMeaty.css';

const menuDataLeft = [
  {
    title: "Sticky chicken wings",
    description: "with optional extra chips",
    price: "47.99",
  },
  {
    title: "Pizza dog",
    description: "with bacon or with pepperoni",
    price: "64.99",
  },
  {
    title: "Shroom schnitzel",
    description:
      "with optional extra chips",
    price: "89.99",
  },
];

const menuDataRight = [
  {
    title: "Bbq ribs",
    description: "with option for chilli ribs",
    price: 99.99,
  },
  {
    title: "Bbq wings & ribs",
    description: "with optional extra loaded chips",
    price: 119.99,
  },
  {
    title: "Double bacon and Avo schnitzel",
    description: "with optional extra chips",
    price:89.99,
  },
];

const SomethingMeaty = () => {
  return (
    <div className="container somethingmeaty">
      <h1 className="heading-secondary">
      Something <span>Meaty</span>
      </h1>

      <div className="grid-container">
        <div>
          {menuDataLeft.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
            />
          ))}
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

export default SomethingMeaty