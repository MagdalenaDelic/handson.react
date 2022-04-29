import React from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import Grid from "../../components/Grid/Grid";
import CourseCard from "../../components/CourseCard/CourseCard";
import LectureImg1 from "../../assets/images/Images/lecture-1.jpg";
import LectureImg2 from "../../assets/images/Images/lecture-2.jpg";
import LectureImg3 from "../../assets/images/Images/lecture-3.jpg";
import LectureImg4 from "../../assets/images/Images/lecture-4.jpg";
import LectureImg5 from "../../assets/images/Images/lecture-5.jpg";
import LectureImg6 from "../../assets/images/Images/lecture-6.jpg";
import LectureImg7 from "../../assets/images/Images/lecture-7.jpg";
import LectureImg8 from "../../assets/images/Images/lecture-8.jpg";

const Courses = () => {
  return (
    <>
      <Header modifiers={["secondary"]} />
      <Main>
        <Section title={"All Courses"}>
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
              title={"Advanced CSS"}
              subtitle={"120+ Minutes"}
            />
            <CourseCard
              imgSrc={LectureImg5}
              imgAlt={"JavaScript Basic"}
              title={"JavaScript Basic"}
              subtitle={"60+ Minutes"}
            />
            <CourseCard
              imgSrc={LectureImg6}
              imgAlt={"Advanced JavaScript"}
              title={"Advanced JavaScript"}
              subtitle={"120+ Minutes"}
            />
            <CourseCard
              imgSrc={LectureImg7}
              imgAlt={"Intro tu React"}
              title={"Intro tu React"}
              subtitle={"120+ Minutes"}
            />
            <CourseCard
              imgSrc={LectureImg8}
              imgAlt={"React Events & Lists "}
              title={"React Events & Lists"}
              subtitle={"120+ Minutes"}
            />
          </Grid>
        </Section>
      </Main>
    </>
  );
};

export default Courses;
