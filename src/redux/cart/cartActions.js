import { createAction } from "@reduxjs/toolkit";

const addToCart = createAction("cart/addToCart");
const removeFromCartByID = createAction("cart/removeFromCartByID");
const createOrder = createAction("cart/createOrder");
const setLoader = createAction("cart/setLoader");
const setError = createAction("cart/setError");
const resetError = createAction("cart/resetError");

export {
  addToCart,
  removeFromCartByID,
  createOrder,
  setLoader,
  setError,
  resetError,
};

// ================= redux ======================
// const ADDTOCART = "cart/addToCart";
// const REMOVEFROMCARTBYID = "cart/removeFromCartByID";
// const CREATEORDER = "cart/createOrder";
// const SETLOADER = "cart/setLoader";
// const SETERROR = "cart/setError";
// const RESETERROR = "cart/resetError";

// export {
//   ADDTOCART,
//   REMOVEFROMCARTBYID,
//   CREATEORDER,
//   SETLOADER,
//   SETERROR,
//   RESETERROR,
// };

// const addToCart = (product) => ({ type: ADDTOCART, payload: product });
// const removeFromCartByID = (id) => ({ type: REMOVEFROMCARTBYID, payload: id });
// const createOrder = () => ({ type: CREATEORDER });
// const setLoader = () => ({ type: SETLOADER });
// const setError = (error) => ({ type: SETERROR, payload: error });
// const resetError = () => ({ type: RESETERROR });

// export {
//   addToCart,
//   removeFromCartByID,
//   createOrder,
//   setLoader,
//   setError,
//   resetError,
// };
