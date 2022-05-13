import React from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/CourseCard";
import { useState, useEffect } from "react";
import coursesMock from "../../lib/mock/courses";
import { Grid } from "../../lib/style/generalStyles";
import Loader from "../../components/Loader/Loader";
import { SearchBar } from "../../components/Search/SearchStyle";
import Sidebar from "../../components/Sidebar/Sidebar";

const Courses = () => {
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
      <Header setIsSidebarOpened={setIsSidebarOpened} isSecondary />
      <Sidebar
        isSidebarOpened={isSidebarOpened}
        setIsSidebarOpened={setIsSidebarOpened}
      />
      {loader == true ? (
        <>
          <SearchBar placeholder="Search . . . " type="text" disabled />
          <Loader />
        </>
      ) : (
        <Main>
          <SearchBar
            placeholder="Search . . . "
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Section title={"All Courses"}>
            {courses && (
              <Grid>
                {courses
                  .filter((course) => {
                    if (search == "") {
                      return course;
                    } else if (
                      course.title.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return course;
                    }
                  })
                  .map(
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
