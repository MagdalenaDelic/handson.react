import React from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import CourseContent from "../../components/CourseContent/CourseContent";
import CourseCard from "../../components/CourseCard/CourseCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import coursesMock from "../../lib/mock/courses";
import Sidebar from "../../components/Sidebar/Sidebar";

const Course = () => {
  const { id } = useParams();
  const [courses, setCourses] = useState(null);
  const [course, setCourse] = useState(null);
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  useEffect(() => {
    setCourses(coursesMock);
  }, []);

  useEffect(() => {
    courses &&
      setCourse(...courses.filter((course) => course.id === parseInt(id)));
  }, [courses, id]);

  return (
    <>
      <Header setIsSidebarOpened={setIsSidebarOpened} isSecondary />
      <Sidebar
        isSidebarOpened={isSidebarOpened}
        setIsSidebarOpened={setIsSidebarOpened}
      />
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
