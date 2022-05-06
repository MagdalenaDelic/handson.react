import React from "react";
import "./Header.scss";
import LogoImg from "../../assets/images/Images/logo.svg";
import Button from "../Button/Button";
import { Link, NavLink } from "react-router-dom";
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

const Header = ({ isSecondary }) => {
  return (
    <HeaderWrapper isSecondary={isSecondary}>
      <HeaderInner>
        <LogoLink to="/">
          <LogoElement src={LogoImg} alt="" />
        </LogoLink>
        <Hamburger />
        <Nav>
          <HeaderNavLink to="/Courses"> Courses</HeaderNavLink>
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

  // return (
  //   <header className={headerClass}>
  //     <div className="Header-Inner">
  //       <Link to="/" className="Header-LogoLink">
  //         <img className="Header-LogoImg" src={LogoImg} alt="" />
  //       </Link>

  //       <svg
  //         className="Header-Hamburger"
  //         width="448"
  //         height="392"
  //         viewBox="0 0 448 392"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <path
  //           d="M16 72H432C440.837 72 448 64.837 448 56V16C448 7.163 440.837 0 432 0H16C7.163 0 0 7.163 0 16V56C0 64.837 7.163 72 16 72ZM16 232H432C440.837 232 448 224.837 448 216V176C448 167.163 440.837 160 432 160H16C7.163 160 0 167.163 0 176V216C0 224.837 7.163 232 16 232ZM16 392H432C440.837 392 448 384.837 448 376V336C448 327.163 440.837 320 432 320H16C7.163 320 0 327.163 0 336V376C0 384.837 7.163 392 16 392Z"
  //           fill="black"
  //         />
  //       </svg>

  //       <nav className="Header-Nav">
  //         <NavLink
  //           to="/Courses"
  //           className={({ isActive }) =>
  //             isActive ? "Header-active" : "Header-NavLink "
  //           }
  //         >
  //           Courses
  //         </NavLink>
  //         <div className="Header-NavButton ">
  //           <Button modifiers={["nav"]}>Sign In</Button>
  //         </div>
  //         <div className="Header-NavButton ">
  //           <Button modifiers={["nav", "secondary"]}>Registration</Button>
  //         </div>
  //       </nav>
  //     </div>
  //   </header>
  // );
};

export default Header;
