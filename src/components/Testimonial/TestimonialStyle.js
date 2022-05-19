import styled from "styled-components";
import { colors } from "../../lib/style/theme";

export const TestimonialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TestimonialFigure = styled.figure`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;
export const TestimonialImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TestimonialContent = styled.div`
  padding-left: 120px;
`;
export const TestimonialText = styled.p`
  font-size: 30px;
  line-height: 180%;
  color: ${colors.textPrimary};
`;
export const TestimonialQuotation = styled.span`
  font-size: 48px;
`;
