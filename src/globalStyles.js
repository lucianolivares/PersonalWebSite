import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  scroll-behavior: smooth;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#20CE65" : "#fff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: ${({ primary }) => (primary ? "#fff" : "#000")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? "#4B59F7" : "#20CE65")};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const InfoSec = styled.div`
  color: #fff;
  min-height: 92vh;
  background: ${({ lightBg }) => (lightBg ? "#202D37" : "#19232B")};
`;

export const InfoRow = styled.div`
  display: flex;
  min-height: 80vh;
  margin: 0 -15px 0 -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  padding-right: 15px;
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export default GlobalStyle;
