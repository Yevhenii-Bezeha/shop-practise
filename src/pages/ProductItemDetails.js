import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { getProductByID } from "../services/api";
import { ProductDetailsContainer } from "./ProductItemDetailsStyled";

class ProductItemDetails extends Component {
  state = { laptop: null };
  async componentDidMount() {
    const res = await getProductByID(
      this.props.match.params.category,
      this.props.match.params.productID
    );
    this.setState({ laptop: res });
  }

  goBack = () => {
    if (this.props.location.state) {
      this.props.history.push(this.props.location.state.from);
    } else
      this.props.history.push(`/products/${this.props.match.params.category}`);
  };
  render() {
    const { laptop } = this.state;
    return (
      <ProductDetailsContainer>
        <button className="goBack" onClick={this.goBack}>
          Go back
        </button>
        {laptop && (
          <div className="content">
            <h3 className="listItemTitle">{laptop.name}</h3>
            <div className="imageWrapper">
              <img
                src={laptop.image}
                alt={laptop.name}
                className="listItemImage"
              />
            </div>
            <p className="description">{laptop.description}</p>
            <p className="priceTitle">
              {laptop.isSale ? (
                <>
                  <span className="withSalePrice">{laptop.price - 1000}</span>{" "}
                  <span className="withoutSalePrice">{laptop.price}</span>
                </>
              ) : (
                <span className="withoutSalePrice">{laptop.price}</span>
              )}
              {" грн"}
            </p>
          </div>
        )}
      </ProductDetailsContainer>
    );
  }
}

export default withRouter(ProductItemDetails);
