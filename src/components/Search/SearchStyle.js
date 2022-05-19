import styled from "styled-components";
import { colors, brakepoints } from "../../lib/style/theme";

export const SearchBar = styled.input`
  padding: 0 15px;
  margin-top: 40px;
  margin-left: 40px;
  border-radius: 30px;
  outline: 1px solid black;
  outline: none;
  height: 40px;

  @media (${brakepoints.tabletMedium}) {
    max-width: 400px;
    padding: 10px;
    border: 1px solid;
    border-color: ${colors.textSecondary};
    border-radius: 6px;
    font-size: 14px;
    &:focus {
      border-color: ${colors.textPrimary};
    }
  }

  @media (${brakepoints.desktop}) {
    font-size: 16px;
  }
`;
