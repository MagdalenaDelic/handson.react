import styled from "styled-components";
import { colors, brakepoints } from "../../lib/style/theme";

export const Landing = styled.div`
  height: 100vh;
  position: relative;

  @media (${brakepoints.mobileLarge}) {
    height: 100vh;
    position: relative;
  }
`;

export const LanidngImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const LandingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const LandingContentInner = styled.div``;

export const LandingOverlayPrimary = styled.div`
  width: 27%;
  height: 100%;
  left: 0;
  position: absolute;
  background: ${colors.primary};
  opacity: 90%;
`;
export const LandingOverlaySecondary = styled.div`
  width: 73%;
  height: 100%;
  right: 0;
  position: absolute;
  background: ${colors.black};
  opacity: 65%;
`;

export const LandingContent = styled.div`
  position: absolute;
  width: 1300px;
  left: 30px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;

  @media (${brakepoints.tablet}) {
    top: 20px;
  }
  @media (${brakepoints.tabletLarge}) {
    top: 20px;
  }
`;

export const LandingTitle = styled.div`
  color: ${colors.secondary};
  font-size: 36px;
  margin-bottom: 24px;
  width: 300px;

  @media (${brakepoints.tablet}) {
    font-size: 40px;
    width: 450px;
  }
  @media (${brakepoints.tabletLarge}) {
    font-size: 45px;
    width: 500px;
  }
  @media (${brakepoints.desktop}) {
    font-size: 56px;
    width: 550px;
  }
`;
export const LandingSubtitle = styled.div`
  color: ${colors.secondary};
  font-size: 16px;
  margin-bottom: 48px;
  width: 250px;

  @media (${brakepoints.tablet}) {
    font-size: 20px;
    width: 400px;
  }
  @media (${brakepoints.tabletLarge}) {
    font-size: 24px;
    width: 500px;
  }
  @media (${brakepoints.desktop}) {
    font-size: 24px;
    width: 500px;
  }
`;
