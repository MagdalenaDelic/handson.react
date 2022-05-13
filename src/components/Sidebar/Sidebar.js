import React from "react";
import Button from "../Button/Button";
import CustomLink from "../CustomLink/CustomLink";
import { HeaderNavLink, Nav, NavButtonLink } from "../Header/HeaderStyle";
import {
  Sidebar as SidebarWrapper,
  UnorderedList,
  XIcon,
} from "./SidebarStyles";

const Sidebar = ({ isSidebarOpened, setIsSidebarOpened }) => {
  return (
    <SidebarWrapper isSidebarOpened={isSidebarOpened}>
      <XIcon onClick={() => setIsSidebarOpened(false)} />
      <UnorderedList>
        <CustomLink to="/Courses">Courses</CustomLink>
        <NavButtonLink to="/">
          <Button modifiers={["nav"]}>Sign In</Button>
        </NavButtonLink>
        <NavButtonLink to="/">
          <Button modifiers={["nav", "secondary"]}>Registration</Button>
        </NavButtonLink>
      </UnorderedList>
    </SidebarWrapper>
  );
};

export default Sidebar;
