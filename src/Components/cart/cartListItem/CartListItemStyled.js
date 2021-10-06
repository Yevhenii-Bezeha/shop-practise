import styled from "styled-components";

export const CartListItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  width: 100%;

  .cartItemName {
    width: 200px;
    font-size: 14px;
  }
  .cartPrice {
    width: 50px;
    font-size: 14px;
    text-align: center;
  }
  .iconContainer {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #819ff5;
    border-radius: 4px;
    fill: #819ff5;
    &:hover {
      border: 1px solid #5f73a1;
      fill: #5f73a1;
      cursor: pointer;
    }
  }
  .iconBin {
    width: 20px;
    height: 20px;
  }

  @media (min-width: 768px) {
    width: 100%;
    /* align-items: center; */
    .cartItemName {
      width: 100%;
      font-size: 16px;
    }
    .cartPrice {
      width: 100px;
    }
  }

  @media (min-width: 1024px) {
  }
`;
