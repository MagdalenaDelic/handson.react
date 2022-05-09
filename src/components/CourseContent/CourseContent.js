import React from "react";
import "./CourseContent.scss";
// import { Link } from "react-router-dom";

const CourseContent = ({ content }) => {
  return <p className="SingleCourse-Text">{content}</p>;
};

export default CourseContent;
