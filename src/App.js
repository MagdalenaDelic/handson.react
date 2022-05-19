import "./App.scss";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./pages/Courses/Courses";
import Course from "./pages/Course/Course";
import Register from "./pages/Register/Register";
import LogIn from "./pages/LogIn/LogIn";
import ScrollToTop from "./components/ScrollToTop";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/Course/:id" element={<Course />} />
        <Route path="/Register/" element={<Register />} />
        <Route path="/LogIn/" element={<LogIn />} />
        <Route path="/Profile/" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
