import React from "react";
import "./Testimonial.scss";
import TestimonialImg from "../../assets/images/Images/testimonial.jpg";

const Testimonial = () => {
  return (
    <div className="Testimonial ">
      <figure className="Testimonial-Figure">
        <img
          src={TestimonialImg}
          alt="Testimonialka"
          className="Testimonial-Img"
        />
      </figure>
      <div className="Testimonial-Content">
        <p className="Testimonial-Text">
          <span className="Testimonial-Quotation">"</span>
          At the academy, I learned how to apply technology in practice.
          Frontend education was demanding, it required a lot of time. Upon
          completion, I got my first job as a developer.
          <span className="Testimonial-Quotation">"</span>
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
