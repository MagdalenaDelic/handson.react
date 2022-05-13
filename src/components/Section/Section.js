import React from "react";
import Button from "../Button/Button";
import "./Section.scss";
import { NavButtonLink } from "../Header/HeaderStyle";

import {
  Section as SectionWrapper,
  SectionInner,
  SectionActionText,
  SectionHeading,
} from "./SectionStyle";

const Section = ({
  modifiers,
  actionText,
  title,
  buttonDestination,
  buttonText,
  isHeadingVisible = true,
  children,
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
            {title && <h2 className="Section-Title">{title}</h2>}
            {buttonText && (
              <NavButtonLink to={buttonDestination}>
                <Button modifiers={["heading", "outline"]}>{buttonText}</Button>
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
