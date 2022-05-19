import React from "react";
import "./CourseContent.scss";
import { SingleCourseText, SingleCourseP } from "./CourseContentStyle";
// import { Link } from "react-router-dom";

const CourseContent = ({ content }) => {
  return (
    <>
      <SingleCourseText>
        <SingleCourseP>{content}</SingleCourseP>
      </SingleCourseText>
    </>
  );
};

export default CourseContent;
