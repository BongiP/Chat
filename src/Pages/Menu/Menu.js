import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/menubg.jpg";
import MenuOfTheDay from "./MenuOfTheDay/MenuOfTheDay";
import SomethingMeaty from './SomethingMeaty/SomethingMeaty'
import LoadedTasties from "./LoadedTasties/LoadedTasties";
import HeartyBurgers from './HeartyBurgers/HeartyBurgers'
import Beverages from './Beverages/Beverages'

const Menu = () => {
  return (
    <div>
      <HeroImage
        bgImage={bgImage}
        heading={["Our ", <span>Menu</span>]}
        text="Everything we have to offer at one glance"
      />
      <MenuOfTheDay />
      <SomethingMeaty />
      <LoadedTasties />
      <HeartyBurgers />
      <Beverages />
    </div>
  );
};

export default Menu;
