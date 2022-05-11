import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { brakepoints, colors } from "../../lib/style/theme";
import { ReactComponent as HamburgerIcon } from "../../assets/images/Images/icon-hamburger.svg";

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  padding: 24px;

  ${(props) =>
    props.isSecondary &&
    `
    background-color:${colors.textPrimary};
    position: initial;
    `}

  @media  (${brakepoints.desktop}) {
    padding: 32px 0;
  }
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (${brakepoints.desktop}) {
    width: 900px;
    margin: 0 auto;
    padding: 32px 0px;
  }

  @media (${brakepoints.desktopLarge}) {
    width: 1260px;
  }
`;

export const Hamburger = styled(HamburgerIcon)`
  width: 30px;
  height: auto;

  path {
    fill: (${colors.bgPrimary});
  }

  @media (${brakepoints.desktop}) {
    display: none;
  }
`;

export const LogoLink = styled(Link)``;

export const LogoImg = styled.img`
  width: 140 px;
`;

export const Nav = styled.nav`
  display: none;

  @media (${brakepoints.desktop}) {
    display: block;
  }
`;

export const HeaderNavLink = styled(NavLink)`
  color: ${colors.secondary};
  letter-spacing: 1px;
  margin-right: 48px;

  ${(props) =>
    props.isActive &&
    `
    text-decoration: underline;
    text-underline-offset: 10px;
    `}
`;

export const NavButtonLink = styled(Link)`
  margin-right: 24px;
  display: inline-block;

  &:last-child {
    margin-right: 0;
  }
`;
