import React from "react";
import ListItem from "../../../components/ListItem/ListItem";
import "./AddToCart.css";
import image1 from "../../../assets/burger.jpg";
import image2 from "../../../assets/cheefserve.jpg";
import image3 from "../../../assets/cheesychips.jpg";
import image4 from "../../../assets/patty.jpg";
import image5 from "../../../assets/pizza.jpg";
import image6 from "../../../assets/fivejiveout.jpg";
import image7 from "../../../assets/stickystrips.jpg";
import image8 from "../../../assets/sloppy-pasta.jpg";
import image9 from "../../../assets/burgerchips.jpg";
import image10 from "../../../assets/chillistrips.jpg";

const menuDataLeft = [
  {
    title: "double bacon burger",
    description: "burger with extra bacon",
    price: 94.99,
    img: image1,
  },
  {
    title: "food hut pizza",
    description: "extra cheesy topping",
    price: 99.99,
    img: image2,
  },
  {
    title: "sloppy cheesy chips",
    description: "best ingredients, all fresh",
    price: 64.99,
    img: image3,
  },
  {
    title: "loaded patties",
    description: "pretty pastries that hide a surprise inside",
    price: 84.99,
    img: image4,
  },
  {
    title: "pepperoni pizza",
    description: "best ingredients, all fresh",
    price: 109.99,
    img: image5,
  },
];

const menuDataRight = [
  {
    title: "five jive",
    description: "with chips and free coke on wednesdays",
    price: 249.99,
    img: image6,
  },
  {
    title: "sticky chicken strips",
    description: "dunked in scrumptious secret sauce",
    price: 47.99,
    img: image7,
  },
  {
    title: "sloppy pasta",
    description: "Luscious and wonderfully indulgent",
    price: 49.99,
    img: image8,
  },
  {
    title: "hutty burger combo",
    description: "extra meaty with fries",
    price: 99.99,
    img: image9,
  },
  {
    title: "chilli strips",
    description: "giving the heat",
    price: 47.99,
    img: image10,
  },
];

const AddToCart = () => {
  return (
    <div className="container add-to-cart">
      <h1 className="heading-secondary">
        <span>click </span> to add to cart
      </h1>

      <div className="grid-container">
        <div>
          {menuDataLeft.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
              itemImage={data.img}
            />
          ))}
        </div>

        <div>
          {menuDataRight.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
              itemImage={data.img}
            />
          ))}
        </div>
      </div>


            <div className="addtocart-btn">
                <h1 className="heading-secondary">
                    <span>are you </span> done?
                </h1>

                <button>show cart & checkout</button>
            </div>

    </div>
  );
};

export default AddToCart;