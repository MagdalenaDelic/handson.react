import React from "react";
import Grid from "../../components/Grid/Grid";
import Header from "../../components/Header/Header";
import Landing from "../../components/Landing/Landing";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import LectureImg1 from "../../assets/images/Images/lecture-1.jpg";
import LectureImg2 from "../../assets/images/Images/lecture-2.jpg";
import LectureImg3 from "../../assets/images/Images/lecture-3.jpg";
import LectureImg4 from "../../assets/images/Images/lecture-4.jpg";
import CourseCard from "../../components/CourseCard/CourseCard";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Header modifiers={["primary"]} />
      <Main>
        <section>
          <Landing />
        </section>
        <Section
          title={"Open new Possibilities"}
          actionText={"Learn Something new"}
          buttonText={"More Courses"}
          buttonDestination={"/Courses"}
          // isHeadingVisible={"false"}
        >
          <Grid modifiers={["primary"]}>
            <CourseCard
              imgSrc={LectureImg1}
              imgAlt={"Introduction"}
              title={"1. Introduction"}
              subtitle={"60 Minutes"}
            />
            <CourseCard
              imgSrc={LectureImg2}
              imgAlt={"HTML & CSS"}
              title={"2. HTML & CSS"}
              subtitle={"120+ Minutes"}
            />
            <CourseCard
              imgSrc={LectureImg3}
              imgAlt={"Version Control System"}
              title={"3. Version Control System"}
              subtitle={"120+ Minutes"}
            />
            <CourseCard
              imgSrc={LectureImg4}
              imgAlt={"Advanced CSS"}
              title={"4. Advanced CSS"}
              subtitle={"120+ Minutes"}
            />
          </Grid>
        </Section>
        <Section isHeadingVisible={false} modifiers={["testimonials"]}>
          <Testimonial />
        </Section>
      </Main>
    </>
  );
};

export default Home;
