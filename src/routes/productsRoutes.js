import LaptopList from "../Components/laptopList/LaptopList";
import PhoneList from "../Components/phoneList/PhoneList";

export const productsRoutes = [
  {
    name: "Phones",
    path: "/phones",
    component: PhoneList,
    exact: true,
  },
  {
    name: "Laptops",
    path: "/laptops",
    component: LaptopList,
    exact: true,
  },
];
