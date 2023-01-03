import styled from "styled-components";

export const DataDiv = styled.div`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.14px;
  color: black;
  text-align: left;
  display: flex;
  flex-direction: column;
  div:first-child {
    background: #d8dfe4;
    padding: 20px;
  }
  div {
    padding: 20px;
    span {
      margin-left: 20px;
    }
  }
  @media (min-width: 900px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const Close = styled.div`
  font-size: 16px;
  font-weight: 800;
  line-height: 20px;
  letter-spacing: 0em;
  display: flex;
  justify-content: right;
  text-align: right;
  width: 100%;
  cursor: pointer;
`;
