import styled from "styled-components";
import { brakepoints } from "../style/theme";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 48px;

  @media (${brakepoints.tabletSmall}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
  }

  @media (${brakepoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 48px;
  }

  @media (${brakepoints.desktopLarge}) {
    grid-template-columns: repeat(4, 1fr);
  }

  &_Secondary {
    @media (${brakepoints.desktop}) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 48px;
    }
  }
`;
