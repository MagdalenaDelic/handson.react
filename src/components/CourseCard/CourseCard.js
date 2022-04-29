import React from "react";
import "./CourseCard.scss";
import { Link } from "react-router-dom";

const CourseCard = ({ imgSrc, imgAlt, title, subtitle }) => {
  return (
    <Link to="/Course" className="Course">
      <figure className="Course-Figure">
        <img src={imgSrc} alt={imgAlt} className="Course-Img" />
      </figure>
      <h3 className="Course-Title">{title}</h3>
      <p className="Course-Subtitle">{subtitle}</p>
    </Link>
  );
};

export default CourseCard;
