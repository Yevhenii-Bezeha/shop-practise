import React from "react";
import CartList from "../Components/cart/CartList";
import Section from "../Components/section/Section";

const CartPage = ({ data: { cart, removeFromCart, createOrder } }) => {
  return (
    <Section title="Корзина">
      <CartList
        cart={cart}
        removeFromCart={removeFromCart}
        createOrder={createOrder}
      />
    </Section>
  );
};

export default CartPage;
