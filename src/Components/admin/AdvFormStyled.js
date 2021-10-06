import styled from "styled-components";

export const AdvFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 10px 0 10px;

  .advFormLabel {
    display: flex;
    flex-direction: column;
    font-size: 16px;
  }
  .advFormInput {
    border: 1px solid #819ff5;
    height: 30px;
    border-radius: 14px;
    padding-left: 10px;
    margin: 5px 0;
    font-size: 14px;
    outline: none;
    &:hover {
      border: 2px solid #5f73a1;
      cursor: pointer;
    }
  }
  .advFormLabelCheckBox {
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-size: 16px;
  }
  .advFormCheckBox {
    margin-left: 10px;
  }
  .submitButton {
    display: block;
    margin: 0 auto;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    .advFormContent {
      display: flex;
      flex-direction: row;
    }
    .leftColumn,
    .rightColumn {
      width: 50%;
      padding: 0 5px;
    }
    .advFormLabelCheckBox {
      margin-top: 30px;
    }
    .submitButton {
      margin-top: 20px;
    }
  }

  @media (min-width: 1024px) {
    .advFormContent {
      justify-content: center;
    }
    .leftColumn,
    .rightColumn {
      width: 30%;
      padding: 0 10px;
    }
  }
`;
