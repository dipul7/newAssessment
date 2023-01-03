import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 49px 0px 100px 170px;
  @media (max-width: 1400px) {
    padding: 40px;
  }
`;

export const Heading = styled.div`
  font-family: Roboto;
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #074684;
`;

export const InputDiv = styled.div`
  background: #ffffff;
  border: 2px solid #074684;
  height: 52px;
  max-width: 450px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding-left: 26px;
  margin: 30px 0px 30px 0px;
  width: 100%;
  input {
    height: 42px;
    width: 90%;
    border: none;
    font-size: 20px;
    font-family: Roboto;
    font-weight: 700;

    &:focus,
    input:focus {
      outline: none;
    }
  }
`;

export const TopHead = styled.div`
  max-width: 1000px;
  height: 79px;
  background: #074684;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-bottom: 5px;
  width: 100%;

  div {
    font-family: Roboto;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center;
    color: #ffffff;
    align-items: center;
    @media (max-width: 900px) {
      font-size: 14px;
      line-height: 16px;
    }
    @media (max-width: 400px) {
      font-size: 8px;
      line-height: 12px;
    }
  }
`;

export const Desc = styled.div`
  max-width: 1000px;
  height: 79px;
  background: #f8fbfd;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-bottom: 5px;
  width: 100%;
  cursor: pointer;
  &:hover {
    background: #5f9ea0;
    color: #ffffff;
  }
  div {
    font-family: Roboto;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0px;
    white-space: nowrap;
    width: 20%;
    text-align: center;
    @media (max-width: 900px) {
      font-size: 14px;
      line-height: 16px;
    }
    @media (max-width: 400px) {
      font-size: 8px;
      line-height: 12px;
    }
  }
`;
