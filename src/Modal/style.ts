import styled from "styled-components";

interface I_ModalBodyProps {
  show: boolean;
}

export const ModalBody = styled.div<I_ModalBodyProps>`
  color: black;
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  justify-content: flex-end;
  align-items: center;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(26, 39, 50, 0.7);
  backdrop-filter: blur(5px);
`;

export const ModalContent = styled.div<any>`
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #e9eaeb;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 5px;
  padding: ${({ back }) => (back == "true" ? "20px 0" : "20px")};
  overflow: auto;
  position: relative;
  max-height: 100%;
  max-width: 90%;
  min-width: 90%;
  backdrop-filter: blur(21px);
  a {
    color: black;
    &:hover {
      text-decoration: underline;
    }
  }

  .child {
    margin-top: ${({ withMargin }) => (withMargin ? "13px" : 0)};
  }

  .cross {
    position: absolute;
    top: 18px;
    right: 18px;
    cursor: pointer;
    height: 25px;
    border: ${({ back }) => (back == "true" ? "1px solid #101010" : "none")};
    border-radius: 50%;
  }
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;

  @media (min-width: 900px) {
    max-width: 100%;
    min-width: 502px;
    padding: 30px;
    height: 100vh;
    .cross {
      height: 32px;
      top: 28px;
      right: 28px;
    }
  }
`;

export const Circle = styled.div`
  border: 2px solid blue;
  border-radius: 50%;
  width: 112px;
  height: 112px;
  z-index: 86;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.div<any>`
  font-family: ProMedium;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.1428571492433548px;
  margin-top: ${({ withMargin }) => (withMargin == "true" ? "24px" : 0)};
  color: black;
  @media (min-width: 900px) {
    font-size: 22px;
    line-height: 26px;
  }
`;

export const Desc = styled.div`
  font-family: ProRegular;
  font-size: 13px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  margin: 13px 0 24px;
`;
