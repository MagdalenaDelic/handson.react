import React from "react";
import { Hamburger as HamburgerWrapper } from "../Header/HeaderStyle";
import { HeaderNavLink, NavButtonLink } from "../Header/HeaderStyle";
import Button from "../Button/Button";

const Hamburger2 = () => {
  return (
    <>
      <div>
        <HamburgerWrapper />
        <ul>
          <li>
            <HeaderNavLink to="/Courses">Courses</HeaderNavLink>
          </li>
          <li>
            <NavButtonLink to="/">
              <Button modifiers={["nav"]}>Sign In</Button>
            </NavButtonLink>
          </li>
          <li>
            <NavButtonLink to="/">
              <Button modifiers={["nav", "secondary"]}>Registration</Button>
            </NavButtonLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Hamburger2;
