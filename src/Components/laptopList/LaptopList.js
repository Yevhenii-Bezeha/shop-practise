import React from "react";
import LaptopListItem from "./laptopListItem/LaptopListItem";
import { LaptopListContainer } from "./LaptopListStyled";

const LaptopList = ({ laptops, addToCart }) => {
  return (
    <LaptopListContainer>
      {laptops.map((laptop) => (
        <LaptopListItem laptop={laptop} key={laptop.id} addToCart={addToCart} />
      ))}
    </LaptopListContainer>
  );
};

export default LaptopList;
