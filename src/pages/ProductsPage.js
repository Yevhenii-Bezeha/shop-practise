import React from "react";
import { productsRoutes } from "../routes/productsRoutes";
import { NavLink, Route, Switch } from "react-router-dom";
import { ProductsPageContainer } from "./ProductsPageStyled";
import Section from "../Components/section/Section";

const ProductsPage = ({ match, data }) => {
  return (
    <ProductsPageContainer>
      <ul className="navigationList">
        {productsRoutes.map((route) => (
          <li className="navigationListItem" key={route.path}>
            <NavLink
              to={match.url + route.path}
              exact={route.exact}
              className="navigationListItemAnchor"
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Switch>
        {productsRoutes.map(({ name, path, exact, component: MyComponent }) => (
          <Route
            path={match.path + path}
            exact={exact}
            render={() => (
              <Section title={name}>
                <MyComponent {...data} />
              </Section>
            )}
          />
        ))}
      </Switch>
    </ProductsPageContainer>
  );
};

export default ProductsPage;
