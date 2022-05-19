import React from "react";
import "./Testimonial.scss";
import TestimonialImg from "../../assets/images/Images/testimonial.jpg";
import {
  TestimonialWrapper,
  TestimonialFigure,
  TestimonialImg as TestimonialImgWrapper,
  TestimonialContent,
  TestimonialText,
  TestimonialQuotation,
} from "./TestimonialStyle";

const Testimonial = () => {
  return (
    <TestimonialWrapper>
      <TestimonialFigure>
        <TestimonialImgWrapper src={TestimonialImg} alt="Testimonialka" />
      </TestimonialFigure>
      <TestimonialContent>
        <TestimonialText>
          <TestimonialQuotation>"</TestimonialQuotation>
          At the academy, I learned how to apply technology in practice.
          Frontend education was demanding, it required a lot of time. Upon
          completion, I got my first job as a developer.
          <TestimonialQuotation>"</TestimonialQuotation>
        </TestimonialText>
      </TestimonialContent>
    </TestimonialWrapper>
  );
};

export default Testimonial;
