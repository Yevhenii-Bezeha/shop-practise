import styled from "styled-components";

export const ProductsPageContainer = styled.div`
  .navigationList {
    list-style: none;
    display: flex;
  }
  .navigationListItem {
    padding: 10px 0;
    margin-top: 10px;
  }
  .navigationListItemAnchor {
    text-decoration: none;
    color: #819ff5;
    text-transform: uppercase;
    &:hover {
      color: #5f73a1;
    }
  }
  .navigationListItem:not(:last-child) {
    margin-right: 20px;
  }

  @media (min-width: 768px) {
    .navigationList {
      flex-direction: row;
      width: 100%;
      background-color: inherit;
      margin-top: 0;
      padding-top: 0;
      align-items: center;
    }
    .navigationListItem {
      margin-top: 0;
    }
    .navigationListItemAnchor {
      color: #819ff5;
      font-weight: 600;
    }
    .navigationListItemActive {
      color: #5f73a1;
    }
  }
`;
