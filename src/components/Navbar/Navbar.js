import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../../images/logo.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Navbar.elements";

function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavBar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeBackground = () => {
    if(window.scrollY >= 47) {
      setNavBar('active')
    } else {
      setNavBar('')
    }
  }


  window.addEventListener('scroll', changeBackground)

  return (
    <>
      <Nav className={`${navbar}`}>
        <NavbarContainer>
          <NavLogo to="home" offset={-56} onClick={closeMobileMenu}>
            <NavIcon src={logo} />
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click} activeClass="active">
            <NavItem>
              <NavLinks
                to="home"
                spy={true}
                offset={-56}
                onClick={closeMobileMenu}
              >
                Inicio
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="journey"
                spy={true}
                offset={-54}
                onClick={closeMobileMenu}
              >
                Experiencia
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="portafolio"
                spy={true}
                offset={-52}
                onClick={closeMobileMenu}
              >
                Portafolio
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                spy={true}
                offset={-50}
                onClick={closeMobileMenu}
              >
                Contacto
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
