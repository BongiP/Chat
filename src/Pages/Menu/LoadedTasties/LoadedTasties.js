import React from 'react';
import ListItem from "../../../components/ListItem/ListItem";

import './LoadedTasties.css';

const menuDataLeft = [
  {
    title: "Cheesy Chilli chips",
    description: "Fries with melted cheese and chilli",
    price: 39.99,
  },
  {
    title: "Cheesy Bacon Chips",
    description: "Fries with melted cheese and bacon",
    price: 52.99,
  },
  {
    title: "Cheesy Pepperoni Chips",
    description: "Fries with pepperoni and cheese sauce",
    price: 52.99,
  },
  {
    title: "Cheesy Chicken Chips",
    description: "Fries with chicken bits and cheese sauce",
    price: 64.99,
  },
];

const menuDataRight = [
  {
    title: "Cheesy Chilli Pasta",
    description: "Pasta with cheese sauce and chilli",
    price: 39.99,
  },
  {
    title: "Cheesy Bacon Pasta",
    description: "Pasta with bacon and cheese sauce",
    price: 49.99,
  },
  {
    title: "Cheesy Pepperoni Pasta",
    description: "Pasta with pepperoni and cheese sauce",
    price: 54.99,
  },
  {
    title: "Cheesy Bbq Chicken Pasta",
    description: "Pasta with Bbq chicken and cheese sauce",
    price: 64.99,
  },
];

const LoadedTasties = () => {
  return (
    <div className='section'>
        <div className="container loaded-tasties">
      <h1 className="heading-secondary">
      Loaded <span>Tasties</span>
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
    </div>
  )
}

export default LoadedTasties