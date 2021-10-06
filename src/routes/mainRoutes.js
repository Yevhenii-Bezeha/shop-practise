import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    name: "Products",
    path: "/products",
    component: ProductsPage,
    exact: false,
  },
  {
    name: "Cart",
    path: "/cart",
    component: CartPage,
    exact: false,
  },
  {
    name: "Administration",
    path: "/admin",
    component: AdminPage,
    exact: false,
  },
  {
    name: "Registration",
    path: "/registration",
    component: AuthPage,
    exact: false,
  },
  {
    name: "Login",
    path: "/login",
    component: AuthPage,
    exact: false,
  },
];
