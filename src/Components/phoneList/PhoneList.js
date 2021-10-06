import React, { Component } from "react";
import PhoneListItem from "./phoneListItem/PhoneListItem";
import { PhoneListContainer } from "./PhoneListStyled";

class PhoneList extends Component {
  render() {
    return (
      <PhoneListContainer>
        {!!this.props.phones.length ? (
          this.props.phones.map((phone) => (
            <PhoneListItem
              phone={phone}
              key={phone.id}
              addToCart={this.props.addToCart}
            />
          ))
        ) : (
          <p className="errorTitle">{this.props.error}</p>
        )}
      </PhoneListContainer>
    );
  }
}

export default PhoneList;
