import React from "react";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import { productsRoutes } from "../routes/productsRoutes";

const ProductsPage = (ownProps) => {
  const match = useRouteMatch();
  return (
    <>
      {/* <Section title="Мобильные телефоны">
        <PhoneList phones={phones} addToCart={addToCart} error={error} />
      </Section>
      <Section title="Ноутбуки">
        <LaptopList laptops={laptops} addToCart={addToCart} error={error} />
      </Section> */}

      <nav>
        <ul>
          {productsRoutes.map((route) => (
            <li key={route.path}>
              <NavLink to={match.url + route.path} exact={route.exact}>
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Switch>
        {productsRoutes.map(({ path, exact, component: MyComponent }) => (
          <Route
            key={path}
            path={match.url + path}
            exact={exact}
            render={(props) => <MyComponent {...props} {...ownProps} />}
          />
        ))}
      </Switch>
    </>
  );
};

export default ProductsPage;
