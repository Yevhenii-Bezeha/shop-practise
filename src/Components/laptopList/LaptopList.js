import React, { Component } from "react";
import LaptopListItem from "./laptopListItem/LaptopListItem";
import { LaptopListContainer } from "./LaptopListStyled";
class LaptopList extends Component {
  render() {
    return (
      <LaptopListContainer>
        {!!this.props.laptops.length ? (
          this.props.laptops.map((laptop) => (
            <LaptopListItem
              laptop={laptop}
              key={laptop.id}
              addToCart={this.props.addToCart}
            />
          ))
        ) : (
          <p className="errorTitle">{this.props.error}</p>
        )}
      </LaptopListContainer>
    );
  }
}

export default LaptopList;
