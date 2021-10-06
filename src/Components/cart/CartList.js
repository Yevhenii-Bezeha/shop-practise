import React from "react";
import CartListItem from "./cartListItem/CartListItem";
import { CartListContainer, CartListContainerWrapper } from "./CartListStyled";

const CartList = ({ cart, removeFromCart, createOrder }) => {
  const getTotalPrice = () =>
    cart.reduce((acc, product) => {
      acc += product.price;
      return acc;
    }, 0);
  return (
    <CartListContainerWrapper>
      {cart.length ? (
        <>
          <CartListContainer>
            {cart.map((product) => (
              <CartListItem
                key={product.id}
                product={product}
                removeFromCart={removeFromCart}
              />
            ))}
          </CartListContainer>
          <div className="totalInfo">
            <p className="totalInfoTitle">Общая сумма заказа:</p>
            <p className="totalInfoPrice">
              {getTotalPrice()} <span className="totalInfoTitle">грн</span>
            </p>
          </div>
          <button type="button" onClick={createOrder} className="orderButton">
            Оформить заказ
          </button>
        </>
      ) : (
        <p>Добавьте товары в корзину</p>
      )}
    </CartListContainerWrapper>
  );
};

export default CartList;
