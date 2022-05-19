import React from "react";
import "./Header.scss";
import LogoImg from "../../assets/images/Images/logo.svg";
import Button from "../Button/Button";

import {
  Header as HeaderWrapper,
  HeaderInner,
  Hamburger,
  LogoLink,
  LogoImg as LogoElement,
  Nav,
  NavButtonLink,
} from "./HeaderStyle";
import CustomLink from "../CustomLink/CustomLink";

const Header = ({ isSecondary, isActive, setIsSidebarOpened }) => {
  return (
    <HeaderWrapper isSecondary={isSecondary}>
      <HeaderInner>
        <LogoLink to="/">
          <LogoElement src={LogoImg} alt="" />
        </LogoLink>
        <Hamburger onClick={() => setIsSidebarOpened(true)} />
        <Nav>
          <CustomLink to="/Courses">Courses</CustomLink>
          <CustomLink to="/Profile">Profile</CustomLink>
          <NavButtonLink to="/LogIn">
            <Button isNav>Sign In</Button>
          </NavButtonLink>
          <NavButtonLink to="/Register">
            <Button isNav isSecondaryButton>
              Registration
            </Button>
          </NavButtonLink>
        </Nav>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
