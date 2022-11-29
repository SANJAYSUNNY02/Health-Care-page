import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
  MDBInputGroup,
} from "mdb-react-ui-kit";

import logo from "../../assets/cnx-logo-white.png";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import search from "../../assets/search.svg";
import wifi from "../../assets/wifi.svg";

function onLinkClick(e) {
  e.preventDefault();
  console.log("link clicked");
}

const NavbarComponent = () => {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

  return (
    <MDBNavbar expand="lg" dark bgColor="success">
      <MDBContainer>
        <MDBNavbarBrand href="#" onClick={onLinkClick}>
          <img src={logo} alt="" width="100" height="30" className="" />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
        >
          <MDBIcon color="light" icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavNoTogglerSecond}>
          <MDBNavbarNav className="justify-content-center mr-auto mb-2 mb-lg-0 ">
            <MDBNavbarItem>
              <MDBNavbarLink
                active
                aria-current="page"
                href="#home"
                onClick={onLinkClick}
              >
                HOME
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#about" onClick={onLinkClick}>
                ABOUT
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#services" onClick={onLinkClick}>
                SERVICES
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#profiles" onClick={onLinkClick}>
                PROFILES
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#blog" onClick={onLinkClick}>
                BLOG
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#contact" onClick={onLinkClick}>
                CONTACT
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBInputGroup
            tag="form"
            className="d-flex flex-nowrap align-items-center w-auto mb-2"
          >
            <MDBBtn color="success" className="m-1">
              <a href="#facebook" onClick={onLinkClick}>
                <img src={facebook} alt="" />{" "}
              </a>
            </MDBBtn>
            <MDBBtn color="success">
              <a href="#twitter" onClick={onLinkClick}>
                <img src={twitter} alt="" />{" "}
              </a>
            </MDBBtn>
            <MDBBtn color="success">
              <a href="#wifi" onClick={onLinkClick}>
                <img src={wifi} alt="" />{" "}
              </a>
            </MDBBtn>
            <MDBBtn color="success">
              {" "}
              <a href="#search" onClick={onLinkClick}>
                <img src={search} alt="" />{" "}
              </a>
            </MDBBtn>
          </MDBInputGroup>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};
export default NavbarComponent;
