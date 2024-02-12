import { Fragment } from "react";
import Body from "./components/Body";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import "./stylesheets/App.css";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { loadUserAsync } from "./reducersAndActions.js/userSlice";
import MultiStepCourseForm from "./components/MultiStepCourseForm";
import CourseFirst from "./components/CourseFirst";
import CourseSecond from "./components/CourseSecond";
import CourseDetails from "./components/CourseDetails";
import CourseThird from "./components/CourseThird";
import CoursePage from "./components/CoursePage";
import Curriculum from "./components/curriculum/Curriculum";

function App() {
  const dispatch = useDispatch();
  let sendRequest = async () => {};
  // const clientId =
  //   "1038543744732-d92ucmi5ultf5r6d86mncc40r7m63etg.apps.googleusercontent.com";
  useEffect(() => {
    sendRequest();
    dispatch(loadUserAsync());
    // const initClient = () => {
    //   gapi.client.init({
    //     clientId: clientId,
    //     scope: "",
    //   });
    // };
    // gapi.load("client:auth2", initClient);
  }, []);

  // const onSuccess = (res) => {
  //   console.log("success:", res);
  // };
  // const onFailure = (err) => {
  //   console.log("failed:", err);
  // };
  return (
    <Fragment>
      <Nav />
      {/* <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        render={(renderProps) => (
          <button onClick={renderProps.onClick}>
            This is my custom Google button
          </button>
        )}
      /> */}
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/create/course" element={<MultiStepCourseForm />}></Route>
        <Route path="/create/course/1" element={<CourseFirst />}></Route>
        <Route path="/create/course/2" element={<CourseSecond />}></Route>
        <Route path="/create/course/3" element={<CourseThird />}></Route>
        <Route
          path="/create/course/landingpage"
          element={<CourseDetails />}
        ></Route>
        <Route path="/coursecurriculum" element={<Curriculum />}></Route>
        <Route path="/coursepage" element={<CoursePage />}></Route>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
