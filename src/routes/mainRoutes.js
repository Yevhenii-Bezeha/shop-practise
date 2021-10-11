import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    component: lazy(() => import("../pages/HomePage")),
    exact: true,
  },
  {
    name: "Products",
    path: "/products",
    component: lazy(() => import("../pages/ProductsPage")),
    exact: false,
  },
  {
    name: "Cart",
    path: "/cart",
    component: lazy(() => import("../pages/CartPage")),
    exact: false,
  },
  {
    name: "Administration",
    path: "/admin",
    component: lazy(() => import("../pages/AdminPage")),
    exact: false,
  },
  {
    name: "Registration",
    path: "/registration",
    component: lazy(() => import("../pages/AuthPage")),
    exact: false,
  },
  {
    name: "Login",
    path: "/login",
    component: lazy(() => import("../pages/AuthPage")),
    exact: false,
  },
];
