import React from "react";
import { CartListItemContainer } from "./CartListItemStyled";
import sprite from "../../../icons/products/products.svg";

const CartListItem = ({ product, removeFromCart }) => {
  const { name, price, id } = product;
  const remove = () => removeFromCart(id);
  return (
    <CartListItemContainer>
      <p className="cartItemName">{name}</p>
      <p className="cartPrice">{price}</p>
      <div className="iconContainer" onClick={remove}>
        <svg className="iconBin">
          <use href={sprite + "#icon-bin"} />
        </svg>
      </div>
    </CartListItemContainer>
  );
};

export default CartListItem;
