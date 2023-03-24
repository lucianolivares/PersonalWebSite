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
  display: grid;
  padding: 0 2rem;
  min-height: 78vh;
  grid-template-columns: 50% 50%;
  z-index: 1;
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
  }
  .portafolio {
    @media screen and (max-width: 1200px) {
      grid-template-columns: 100%;
    }
  }
`;
export const ContainerPortafolio = styled.div`
  display: grid;
  padding: 0 2rem;
  min-height: 78vh;
  grid-template-columns: 50% 50%;
  z-index: 1;
  @media screen and (max-width: 1500px) {
    max-width: 1200px;
    margin: auto;
    gap: 2rem;
    grid-template-columns: 100%;
  }
  @media screen and (max-width: 1200px) {
    max-width: 600px;
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

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const FooterSection = styled.div`
  height: 2rem;
  background: ${({ lightBg, theme }) =>
    lightBg ? theme.colors.bg_color_ligth : theme.colors.bg_color};
`;
export default GlobalStyle;
