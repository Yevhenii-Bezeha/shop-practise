import styled from "styled-components";

export const CartListContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .totalInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
    width: 100%;
  }
  .totalInfoTitle {
    font-size: 16px;
    font-weight: 600;
    color: #819ff5;
  }
  .totalInfoPrice {
    font-size: 20px;
    font-weight: 600;
    color: #819ff5;
  }
  .orderButton {
    margin-top: 10px;
  }
  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }
`;
export const CartListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  border-bottom: 2px solid #819ff5;
  width: 100%;
`;
