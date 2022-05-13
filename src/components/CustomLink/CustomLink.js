import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { HeaderNavLink } from "../Header/HeaderStyle";

const CustomLink = ({ children, to }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <HeaderNavLink
      to={to}
      style={{
        textDecoration: match ? "underline" : "none",
        textUnderlineOffset: match ? "10px" : "0px",
      }}
    >
      {children}
    </HeaderNavLink>
  );
};

export default CustomLink;
