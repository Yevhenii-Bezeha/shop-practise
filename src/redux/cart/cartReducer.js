import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addToCart,
  createOrder,
  removeFromCartByID,
  resetError,
  setError,
  setLoader,
} from "./cartActions";

const cartItemsReducer = createReducer([], {
  [addToCart]: (state, action) => [...state, action.payload],
  [removeFromCartByID]: (state, action) => [
    ...state.filter((cartItem) => cartItem.id !== action.payload),
  ],
  [createOrder]: () => [],
});

const cartLoaderReducer = createReducer(false, {
  [setLoader]: (state) => !state,
});

const cartErrorReducer = createReducer("", {
  [setError]: (_, action) => action.payload,
  [resetError]: () => "",
});

const cartReducer = combineReducers({
  items: cartItemsReducer,
  loader: cartLoaderReducer,
  error: cartErrorReducer,
});

export default cartReducer;

// ==================== redux ==========================================

// import { combineReducers } from "redux";
// import {
//   ADDTOCART,
//   REMOVEFROMCARTBYID,
//   CREATEORDER,
//   SETERROR,
//   RESETERROR,
//   SETLOADER,
// } from "./cartActions";

// const cartItemsReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADDTOCART:
//       return [...state, action.payload];
//     case REMOVEFROMCARTBYID:
//       return [...state.filter((cartItem) => cartItem.id !== action.payload)];
//     case CREATEORDER:
//       return [];
//     default:
//       return state;
//   }
// };

// const cartLoaderReducer = (state = false, action) => {
//   switch (action.type) {
//     case SETLOADER:
//       return !state;
//     default:
//       return state;
//   }
// };

// const cartErrorReducer = (state = "", action) => {
//   switch (action.type) {
//     case SETERROR:
//       return action.payload;
//     case RESETERROR:
//       return "";
//     default:
//       return state;
//   }
// };

// const cartReducer = combineReducers({
//   items: cartItemsReducer,
//   loader: cartLoaderReducer,
//   error: cartErrorReducer,
// });

// export default cartReducer;
