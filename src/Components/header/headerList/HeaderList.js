import React from "react";
import { NavLink } from "react-router-dom";
import { mainRoutes } from "../../../routes/mainRoutes";

import { HeaderNavigation } from "./HeaderListStyled";

const HeaderList = () => {
  return (
    <HeaderNavigation>
      <ul className="navigationList">
        {mainRoutes.map((headerItem) => (
          <li key={headerItem.path} className="navigationListItem">
            <NavLink
              to={headerItem.path}
              exact={headerItem.exact}
              className="navigationListItemAnchor"
              activeClassName="navigationListItemActiveAnchor"
            >
              {headerItem.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </HeaderNavigation>
  );
};

export default HeaderList;
