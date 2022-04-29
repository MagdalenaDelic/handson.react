import React from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import Grid from "../../components/Grid/Grid";
import CourseContent from "../../components/CourseContent/CourseContent";
import CourseCard from "../../components/CourseCard/CourseCard";
import LectureImg1 from "../../assets/images/Images/lecture-1.jpg";

const Course = () => {
  return (
    <>
      <Header modifiers={["secondary"]} />
      <Main>
        <Section actionText={"102+ Minutes"} title={"All Courses"}>
          <Grid modifiers={["secondary"]}>
            <CourseCard imgSrc={LectureImg1} />
            <CourseContent
              content={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada orci vitae justo dignissim euismod. Cras dapibus ullamcorper augue, vel viverra eros fringilla et. Donec in mauris egestas, finibus sapien a, consectetur elit. Proin ornare arcu nec nisi fermentum egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Duis eu porttitor purus. Praesent eu neque risus."
              }
            />
          </Grid>
        </Section>
      </Main>
    </>
  );
};

export default Course;
