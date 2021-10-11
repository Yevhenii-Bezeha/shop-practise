import React from "react";
import PhoneListItem from "./phoneListItem/PhoneListItem";
import { PhoneListContainer } from "./PhoneListStyled";

const PhoneList = ({ phones, addToCart }) => {
  return (
    <PhoneListContainer>
      {phones.map((phone) => (
        <PhoneListItem phone={phone} key={phone.id} addToCart={addToCart} />
      ))}
    </PhoneListContainer>
  );
};

export default PhoneList;
