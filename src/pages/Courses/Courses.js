import React from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/CourseCard";
import { useState, useEffect } from "react";
import coursesMock from "../../lib/mock/courses";
import { Grid } from "../../lib/style/generalStyles";
import Loader from "../../components/Loader/Loader";

const Courses = () => {
  const [courses, setCourses] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
      setCourses(coursesMock);
    }, 1000);
  }, []);

  return (
    <>
      <Header isSecondary={true} />
      {loader == true ? (
        <Loader />
      ) : (
        <Main>
          <Section title={"All Courses"}>
            {courses && (
              <Grid>
                {courses.map(
                  (course, index) =>
                    index <= 7 && (
                      <CourseCard
                        key={course.id}
                        courseId={course.id}
                        imgSrc={course.imgSrc}
                        imgAlt={course.imgAlt}
                        title={course.title}
                        subtitle={course.subtitle}
                      />
                    )
                )}
              </Grid>
            )}
          </Section>
        </Main>
      )}
    </>
  );
};

export default Courses;
