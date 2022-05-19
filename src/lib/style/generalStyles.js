import styled from "styled-components";
import { brakepoints, colors, fonts } from "../style/theme";
import {
  Form as FormFormik,
  Field as FieldFormik,
  ErrorMessage as ErrorMessageFormik,
} from "formik";
import { css } from "styled-components";

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

export const GridSecondary = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 48px;

  @media (${brakepoints.desktopLarge}) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 50px;
  }
`;
export const Form = styled(FormFormik)`
  @media (${brakepoints.tabletSmall}) {
    width: 400px;

    ${(props) =>
      props.isCentered !== false &&
      `
            margin: 0 auto;
        `}
  }
`;
export const FormRow = styled.div`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

const FieldStyle = css`
  //samo pohranili unutar varijable
  border: 1px solid ${colors.textSecondary};
  border-radius: 6px;
  width: 100%;
  line-height: 50px;
  height: 50px;
  padding: 0 12px;
  outline: none;
  font-size: 14px;
  font-family: ${fonts.primary};

  &:focus {
    border-color: ${colors.textPrimary};
  }

  @media (${brakepoints.desktop}) {
    font-size: 16px;
  }
`;
export const Field = styled(FieldFormik)`
  ${FieldStyle}
`;

export const Select = styled.select`
  ${FieldStyle}
`;
export const Label = styled.div`
  font-size: 15px;
  color: ${colors.black};
  padding-bottom: 8px;
`;

export const Option = styled.option``;

export const ErrorMessage = styled(ErrorMessageFormik)`
  font-size: 15px;
  color: ${colors.primary};
  padding-top: 8px;
`;

export const ProfileCard = styled.div`
  background-color: ${colors.bgSecondary};

  font-family: ${fonts.primary};
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  height: fit-content;
`;
export const ProfileCardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
`;
export const ProfileCardParagraph = styled.p`
  line-height: 150%;
  font-size: 16px;
`;
