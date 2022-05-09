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
// import LectureImg1 from "../../assets/images/Images/lecture-1.jpg";
// import LectureImg2 from "../../assets/images/Images/lecture-2.jpg";
// import LectureImg3 from "../../assets/images/Images/lecture-3.jpg";
// import LectureImg4 from "../../assets/images/Images/lecture-4.jpg";

const Home = () => {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
    }, 1000);
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Header />
      <Main>
        <section>
          <Landing />
        </section>
        <Section
          actionText={"Learn something new"}
          title={"Open new posibilities"}
          buttonText={"More courses"}
          buttonPath={"/Courses"}
        >
          {courses && (
            <Grid>
              {courses
                .filter((courses) => {
                  if (searchTerm == "") {
                    return courses;
                  } else if (
                    courses.title
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return courses;
                  }
                })
                .map(
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
        <Section isHeadingVisible={"false"} modifiers={["testimonials"]}>
          <Testimonial />
        </Section>
      </Main>
    </>
  );
};

export default Home;
