import React, { Component } from "react";
import { AdvFormContainer } from "./AdvFormStyled";
import { createNewAdv } from "../../services/api";

const productCategories = ["phones", "laptops"];

const initialState = {
  category: productCategories[0],
  name: "",
  image: "",
  description: "",
  price: "",
  isSale: false,
};

class AdvForm extends Component {
  state = {
    ...initialState,
  };

  onHandleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      this.setState({ [name]: checked });
      return;
    }
    this.setState({ [name]: value });
  };
  onHandleSubmit = async (e) => {
    e.preventDefault();
    const { category, name, image, description, price, isSale } = this.state;
    const response = await createNewAdv(category, { ...this.state });
    this.props.addNewAdv(category, {
      name,
      image,
      description,
      price: Number(price),
      isSale,
      id: response.name,
    });
    this.setState({ ...initialState });
  };
  render() {
    return (
      <AdvFormContainer>
        <form onSubmit={this.onHandleSubmit} className="advForm">
          <div className="advFormContent">
            <div className="leftColumn">
              <label className="advFormLabel">
                Категория
                <select
                  value={this.state.category}
                  name="category"
                  className="advFormInput"
                  onChange={this.onHandleChange}
                >
                  {productCategories.map((category) => (
                    <option value={category} key={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>

              <label className="advFormLabel">
                Название продукта
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  className="advFormInput"
                  onChange={this.onHandleChange}
                />
              </label>
              <label className="advFormLabel">
                Изображение
                <input
                  type="text"
                  name="image"
                  value={this.state.image}
                  className="advFormInput"
                  onChange={this.onHandleChange}
                />
              </label>
            </div>
            <div className="rightColumn">
              <label className="advFormLabel">
                Описание
                <input
                  type="text"
                  name="description"
                  value={this.state.description}
                  className="advFormInput"
                  onChange={this.onHandleChange}
                />
              </label>
              <label className="advFormLabel">
                Цена
                <input
                  type="text"
                  name="price"
                  value={this.state.price}
                  className="advFormInput"
                  onChange={this.onHandleChange}
                />
              </label>
              <label className="advFormLabelCheckBox">
                Учавствует в распродаже
                <input
                  type="checkbox"
                  name="isSale"
                  checked={this.state.isSale}
                  className="advFormCheckBox"
                  onChange={this.onHandleChange}
                />
              </label>
            </div>
          </div>
          <button type="submit" className="submitButton">
            Добавить продукт
          </button>
        </form>
      </AdvFormContainer>
    );
  }
}

export default AdvForm;
