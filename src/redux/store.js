import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({ reducer: rootReducer });

export default store;

// ========================= redux =========================
// import { createStore } from "redux";
// import rootReducer from "./rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
