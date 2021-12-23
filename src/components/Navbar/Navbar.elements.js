import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  width: 100%;
  display: inline-block;
  background: ${({ theme }) => theme.colors.bg_color};
  left: ${({ click }) => (click ? 0 : "-100%")};
  align-items: flex-start;
  font-size: 2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  transition: all 0.1s linear;
  &.active {
    background: #141C22;
    transition: background-color 100ms linear;
  }
`;

export const NavbarContainer = styled.div`
  z-index: 1;
  margin-right: 0px;
  margin-left: 0px;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  height: 7vh;
  @media screen and (max-width: 991px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

export const NavLogo = styled(LinkScroll)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const NavIcon = styled.img`
  margin-right: 0.5rem;
  width: 100%;
`;

export const MobileIcon = styled.div`
  color: #fff;
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  transition: all 0.3s linear;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 93vh;
    position: absolute;
    top: 7vh;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${({ theme }) => theme.colors.bg_color};
  }
`;

export const NavItem = styled.li`
  font-weight: 400;
  font-size: 1.6rem;
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  height: 100%;
  border-bottom: 2px solid transparent;
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
    transition: 0.1s ease-in-out;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transition: 0.1s ease-in-out;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      transition: 0.2s ease-in-out;
    }
    &.active {
      border: none;
    }
  }
`;

export const NavBtnLink = styled(LinkScroll)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
