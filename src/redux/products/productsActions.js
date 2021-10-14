import { createAction } from "@reduxjs/toolkit";

const setLoader = createAction("@products/getPhones");
const setError = createAction("@products/setError");
const resetError = createAction("@products/resetError");
const setPhones = createAction("@products/getPhones");
const setLaptops = createAction("@products/getLaptops");

export { setError, resetError, setLoader, setPhones, setLaptops };
// ===================== redux =============================

// const SETPHONES = "@products/getPhones";
// const SETLAPTOPS = "@products/getLaptops";
// const SETLOADER = "@products/setLoader";
// const SETERROR = "@products/setError";
// const RESETERROR = "@products/resetError";

// export { SETERROR, SETLOADER, RESETERROR, SETPHONES, SETLAPTOPS };

// const setLoader = () => ({ type: SETLOADER });
// const setError = (error) => ({ type: SETERROR, payload: error });
// const resetError = () => ({ type: RESETERROR });
// const setPhones = (phones) => ({ type: SETPHONES, payload: phones });
// const setLaptops = (laptops) => ({ type: SETLAPTOPS, payload: laptops });

// export { setError, resetError, setLoader, setPhones, setLaptops };
