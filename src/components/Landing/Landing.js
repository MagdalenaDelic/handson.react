import React from "react";
import "./Landing.scss";
import LandingImg from "../../assets/images/Images/landing.jpg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import {
  Landing as LandingWrapper,
  LanidngImg,
  LandingOverlay,
  LandingContentInner,
  LandingOverlayPrimary,
  LandingOverlaySecondary,
  LandingContent,
  LandingTitle,
  LandingSubtitle,
} from "./LandingStyled";

const Landing = () => {
  return (
    <LandingWrapper>
      <LanidngImg src={LandingImg} alt="landing" />
      <LandingOverlay>
        <LandingOverlayPrimary />
        <LandingOverlaySecondary />
      </LandingOverlay>

      <LandingContent>
        <LandingContentInner>
          <LandingTitle>
            Learn what matters, Speck Academy powered by FOI”
          </LandingTitle>
          <LandingSubtitle>
            Make a turnaround in your career or upgrade your current skill set
            with knowledge-based lessons from IT practice.
          </LandingSubtitle>

          <Link to="/Courses">
            <Button isLanding>Explore Courses</Button>
          </Link>
        </LandingContentInner>
      </LandingContent>
    </LandingWrapper>
  );
};

export default Landing;
