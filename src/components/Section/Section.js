import React from "react";
import Button from "../Button/Button";
import "./Section.scss";
import { NavButtonLink } from "../Header/HeaderStyle";

import {
  Section as SectionWrapper,
  SectionInner,
  SectionActionText,
  SectionHeading,
  SectionTitleH2,
  SectionTitleH1,
} from "./SectionStyle";

const Section = ({
  modifiers,
  actionText,
  title,
  buttonDestination,
  buttonText,
  isHeadingVisible = true,
  children,
  isMainSection = false,
  isCentered = false,
}) => {
  const modifierClasses = {
    testimonials: "Section_testimonials",
  };

  let sectionClass = "Section";

  if (modifiers) {
    modifiers.map((modifier) => {
      sectionClass += " " + modifierClasses[modifier];
    });
  }

  return (
    <SectionWrapper>
      <SectionInner>
        {actionText && <SectionActionText>{actionText}</SectionActionText>}
        {isHeadingVisible && (
          <SectionHeading>
            {title &&
              (isMainSection ? (
                <SectionTitleH1 isCentered={isCentered}>{title}</SectionTitleH1>
              ) : (
                <SectionTitleH2 isCentered={isCentered}>{title}</SectionTitleH2>
              ))}

            {buttonText && (
              <NavButtonLink to={buttonDestination}>
                <Button isHeading isOutline>
                  {buttonText}
                </Button>
              </NavButtonLink>
            )}
          </SectionHeading>
        )}
        {children}
      </SectionInner>
    </SectionWrapper>
  );
};

export default Section;
