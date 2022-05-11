import React from "react";
import { useState, useEffect } from "react";
import coursesMock from "../../lib/mock/courses";
import CourseCard from "../../components/CourseCard/CourseCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import { Grid } from "../../lib/style/generalStyles";
import Header from "../../components/Header/Header";
import Landing from "../../components/Landing/Landing";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import Loader from "../../components/Loader/Loader";

const Home = () => {
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
      <Header />
      <Main>
        <section>
          <Landing />
        </section>

        {loader == true ? (
          <Loader />
        ) : (
          <Section
            actionText={"Learn something new"}
            title={"Open new posibilities"}
            buttonText={"More courses"}
            buttonDestination={"/Courses"}
          >
            {courses && (
              <Grid>
                {courses.map(
                  (course, index) =>
                    index <= 3 && (
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
        )}
        <Section isHeadingVisible={"false"} modifiers={["testimonials"]}>
          <Testimonial />
        </Section>
      </Main>
    </>
  );
};

export default Home;
