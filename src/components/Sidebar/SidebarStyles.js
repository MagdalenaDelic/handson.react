import styled from "styled-components";
import { colors } from "../../lib/style/theme";
import { FaTimes } from "react-icons/fa";

export const Sidebar = styled.div`
  z-index: 10;
  position: fixed;
  inset: 0;
  background-color: ${colors.textPrimary};
  display: ${(p) => (p.isSidebarOpened ? "flex" : "none")};
`;

export const UnorderedList = styled.ul`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const XIcon = styled(FaTimes)`
  color: ${colors.primary};
  font-size: 30px;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;
