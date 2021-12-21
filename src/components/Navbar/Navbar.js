import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";


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


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon src={logo} />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="home" spy={true} smooth={true} offset={80} duration={500} onClick={closeMobileMenu}>
                  Inicio
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="journey" spy={true} smooth={true} offset={80} duration={500} onClick={closeMobileMenu}>
                  Trayectoria
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="services" spy={true} smooth={true} offset={80} duration={500}onClick={closeMobileMenu}>
                  Servicios
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="works" spy={true} smooth={true} offset={80} duration={500} onClick={closeMobileMenu}>
                  Trabajos
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="contact" onClick={closeMobileMenu}>
                  Contacto
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
