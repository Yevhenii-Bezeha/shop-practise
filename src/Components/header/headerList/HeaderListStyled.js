import styled from "styled-components";

export const HeaderNavigation = styled.nav`
  .navigationList {
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: calc(100vh - 60px);
    margin-top: 60px;
    background-color: #424242;
    align-items: center;
    padding-top: 30px;
  }
  .navigationListItem {
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

  .navigationListItemActiveAnchor {
    color: red;
  }

  @media (min-width: 768px) {
    .navigationList {
      flex-direction: row;
      width: 100%;
      background-color: inherit;
      margin-top: 0;
      padding-top: 0;
      align-items: center;
      justify-content: center;
    }
    .navigationListItem {
      margin-top: 0;
    }

    .navigationListItem:not(:last-child) {
      margin-right: 20px;
    }
  }
`;
