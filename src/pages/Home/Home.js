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
import { SearchBar } from "../../components/Search/SearchStyle";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  const [courses, setCourses] = useState(null);
  const [loader, setLoader] = useState(true);
  const [search, setSearch] = useState("");
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
      setCourses(coursesMock);
    }, 1000);
  }, []);

  return (
    <>
      <Header setIsSidebarOpened={setIsSidebarOpened} />
      <Sidebar
        isSidebarOpened={isSidebarOpened}
        setIsSidebarOpened={setIsSidebarOpened}
      />

      <Main>
        <section>
          <Landing />
        </section>

        {loader == true ? (
          <>
            <SearchBar placeholder="Search . . . " type="text" disabled />
            <Loader />
          </>
        ) : (
          <>
            <SearchBar
              placeholder="Search . . . "
              type="text"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <Section
              actionText={"Learn something new"}
              title={"Open new posibilities"}
              buttonText={"More courses"}
              buttonDestination={"/Courses"}
            >
              {courses && (
                <Grid>
                  {courses
                    .filter((course) => {
                      if (search === "") {
                        return course;
                      } else if (
                        course.title
                          .toLowerCase()
                          .includes(search.toLowerCase())
                      ) {
                        return course;
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
          </>
        )}
        <Section isHeadingVisible={"false"} modifiers={["testimonials"]}>
          <Testimonial />
        </Section>
      </Main>
    </>
  );
};

export default Home;
