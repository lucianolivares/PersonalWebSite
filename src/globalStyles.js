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

export const InfoSec = styled.div`
  color: #fff;
  margin-top: -1px;
  /* border: 3px solid hotpink; */
  min-height: 94vh;
  background: ${({ lightBg, theme }) =>
    lightBg ? theme.colors.bg_color_ligth : theme.colors.bg_color};
`;
export const Container = styled.div`
  display: flex;
  padding: 0 1rem;
  z-index: 1;
  min-height: 70vh;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary, theme }) =>
    primary ? theme.colors.primary : "#fff"};
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
    color: #000;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;

export const InfoColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`;

export default GlobalStyle;
