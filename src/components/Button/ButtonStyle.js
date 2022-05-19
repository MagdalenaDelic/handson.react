import styled from "styled-components";
import { colors } from "../../lib/style/theme";

export const Button = styled.button`
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  font-size: 16px;
  width: 220px;
  background: ${colors.bgPrimary};
  color: ${colors.primary};
  font-weight: 500;
  border-radius: 30px;
  text-transform: uppercase;

  &:hover {
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(5px 5px 5px ${colors.textPrimary});
  }

  ${(props) => props.isNav && `width: 150px;`}

  ${(props) =>
    props.isSecondaryButton &&
    `background: ${colors.primary};
    color:${colors.bgPrimary};`}

  ${(props) => props.isOutline && `border: 1px solid ${colors.primary};`}
  ${(props) => props.isHeading && `width: 200px;`}
  ${(props) => props.isRight && `; margin-left: 1050px`}

  ${(props) =>
    props.isFormButton &&
    ` display:block;
      margin: 0 auto;`}
`;
