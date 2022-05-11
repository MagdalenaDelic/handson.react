import React from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import CourseContent from "../../components/CourseContent/CourseContent";
import CourseCard from "../../components/CourseCard/CourseCard";
// import LectureImg1 from "../../assets/images/Images/lecture-1.jpg";
// import { Grid } from "../../lib/style/generalStyles";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import coursesMock from "../../lib/mock/courses";

const Course = () => {
  const { id } = useParams();
  const [courses, setCourses] = useState(null);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    setCourses(coursesMock);
  }, []);

  useEffect(() => {
    courses &&
      setCourse(...courses.filter((course) => course.id === parseInt(id)));
  }, [courses, id]);

  return (
    <>
      <Header isSecondary={true} />
      {course && (
        <Section
          title={course.title}
          actionText={course.subtitle}
          buttonText={"Back"}
          buttonDestination={-1}
        >
          <CourseCard
            imgSrc={course.imgSrc}
            imgAlt={course.imgAlt}
            title={course.title}
            subtitle={course.subtitle}
          />
          <CourseContent content={course.text} />
        </Section>
      )}
      ;
    </>
  );
};

export default Course;
