import React from "react";
import "./Header.scss";
import LogoImg from "../../assets/images/Images/logo.svg";
import Button from "../Button/Button";
import Hamburger2 from "../Hamburger/Hamburger";

import {
  Header as HeaderWrapper,
  HeaderInner,
  Hamburger,
  LogoLink,
  LogoImg as LogoElement,
  Nav,
  HeaderNavLink,
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
          {/* <Hamburger2 /> */}
          <CustomLink to="/Courses">Courses</CustomLink>
          <NavButtonLink to="/">
            <Button modifiers={["nav"]}>Sign In</Button>
          </NavButtonLink>
          <NavButtonLink to="/">
            <Button modifiers={["nav", "secondary"]}>Registration</Button>
          </NavButtonLink>
        </Nav>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
