import React, { Fragment } from "react";
import "../stylesheets/Body.css";
import Banner from "./Banner";
import CoursesHome from "./CoursesHome";
import ReactStars from "react-stars";
import Categories from "./Categories";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allCourses } from "../reducersAndActions.js/courseSlice";
import { useSelector } from "react-redux";
const Body = () => {
  const dispatch = useDispatch();
  const d = useSelector((state) => state);
  useEffect(() => {
    dispatch(allCourses());
  }, []);

  return (
    <Fragment>
      <div className="body ">
        <Banner />
        <CoursesHome />
      </div>
      <div className="full-width-tag d-flex justify-content-center">
        <div className="ico-container d-flex align-items-center">
          <i class="ri-play-fill"></i>
          <h6>Learn in-demand skills with over 204,000 video courses</h6>
        </div>
        <div className="ico-container d-flex align-items-center">
          <i class="ri-star-fill"></i>
          <h6>Choose courses taught by real-world experts</h6>
        </div>
        <div className="ico-container d-flex align-items-center">
          <i class="ri-24-hours-line"></i>
          <h6>
            Learn at your own pace, with lifetime access on mobile and desktop
          </h6>
        </div>
      </div>
      <div className="body">
        <div className="course-grid-container ">
          <h4>Students are viewing</h4>
          <div className="courses-grid d-flex ">
            {d.courseSlice.courses ? (
              d.courseSlice.courses.map((e) => (
                <div className="course-card">
                  <div className="course-image">
                    <img src={e.image.url}></img>
                  </div>
                  <h6 className="course-name mt-2">{e.title}</h6>
                  <h6 className="author">Avinash Jain, The Codex</h6>
                  <div className="course-card-rating">
                    <h6 className="d-flex align-items-center">
                      <span style={{ color: "rgb(158, 118, 19)" }}>4.3</span>
                      <ReactStars
                        className="ms-1"
                        count={5}
                        size={18}
                        value={3.5}
                        edit={false}
                      ></ReactStars>
                      <span
                        className="ms-1"
                        style={{
                          fontSize: "0.9vmax",
                          color: " rgba(71, 70, 70, 0.737)",
                        }}
                      >
                        (3,900)
                      </span>
                    </h6>
                    <h6 style={{ color: "black" }}>
                      ₹289{" "}
                      <span
                        className="ms-1"
                        style={{
                          fontSize: "0.9vmax",
                          color: " rgba(71, 70, 70, 0.737)",
                          textDecoration: "line-through",
                        }}
                      >
                        (₹3,900)
                      </span>
                    </h6>
                  </div>
                </div>
              ))
            ) : (
              <h1>loading</h1>
            )}
          </div>
        </div>
      </div>
      <Categories />
      <div className="d-flex align-items-center justify-content-center mt-5 ">
        <div className="instructor d-flex justify-content-center mt-4">
          <div className="instructor-image">
            <img
              className="non-student-cta--non-student-cta-image--7Y7Ul non-student-cta--on-desktop--2bk9D"
              data-purpose="desktop-non-student-cta-image"
              alt=""
              width="400"
              height="400"
              src="home/non-student-cta/instructor-1x-v3.jpg"
              srcset="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg 1x, https://s.udemycdn.com/home/non-student-cta/instructor-2x-v3.jpg 2x"
            />
          </div>
          <div className="instructor-text">
            <h2>Become an instructor</h2>
            <p>
              Instructors from around the world teach millions of students on
              Udemy. We provide the tools and skills to teach what you love.
            </p>
            <button>
              <h6>Start teaching today</h6>
            </button>
          </div>
        </div>
      </div>
      <div className="testimonials d-flex flex-column align-items-center">
        <h3>Trusted by over 13,400 great teams</h3>
        <h6>
          Leading companies use the same courses to help employees keep their
          skills fresh.
        </h6>
        <div className="company-logo d-flex mt-4">
          <div className="company-logo-container">
            <img
              alt="Nasdaq logo"
              src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg"
            />
          </div>
          <div className="company-logo-container">
            <img
              className="volkswagen-logo"
              alt="Volkswagen logo"
              src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg"
            />
          </div>
          <div className="company-logo-container">
            <img
              className="box-logo"
              alt="Box logo"
              src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg"
            />
          </div>
          <div className="company-logo-container">
            <img
              alt="NetApp logo"
              src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg"
            />
          </div>
          <div className="company-logo-container">
            <img
              alt="Eventbrite logo"
              src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
            />
          </div>
          <div className="company-logo-container">
            <img
              alt="Tata Consultancy Services logo"
              src="https://s.udemycdn.com/partner-logos/v4/tcs-dark.svg"
            />
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-5 ">
        <div className="instructor d-flex justify-content-center mt-4">
          <div className="instructor-text">
            <h2 style={{ fontFamily: "Gilroy" }}>
              Udemy{" "}
              <span style={{ color: "purple", fontWeight: "400" }}>
                buisness
              </span>
            </h2>
            <p>
              Get unlimited access to 19,000+ of Udemy’s top courses for your
              team. Learn and improve skills across business, tech, design, and
              more.
            </p>
            <button>
              <h6>Get Udemy Buisness</h6>
            </button>
          </div>
          <div className="instructor-image">
            <img
              class="non-student-cta--non-student-cta-image--7Y7Ul non-student-cta--on-desktop--2bk9D"
              data-purpose="desktop-non-student-cta-image"
              alt=""
              width="400"
              height="400"
              src="home/non-student-cta/ub-1x-v3.jpg"
              srcset="https://s.udemycdn.com/home/non-student-cta/ub-1x-v3.jpg 1x, https://s.udemycdn.com/home/non-student-cta/ub-2x-v3.jpg 2x"
            />
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-5 ">
        <div className="instructor d-flex justify-content-center mt-5">
          <div className="instructor-image">
            <img
              class="non-student-cta--non-student-cta-image--7Y7Ul non-student-cta--on-desktop--2bk9D"
              data-purpose="desktop-non-student-cta-image"
              alt=""
              width="400"
              height="400"
              src="home/non-student-cta/transform-1x-v3.jpg"
              srcset="https://s.udemycdn.com/home/non-student-cta/transform-1x-v3.jpg 1x, https://s.udemycdn.com/home/non-student-cta/transform-2x-v3.jpg 2x"
            />
          </div>
          <div className="instructor-text">
            <h2>Transform your life through education</h2>
            <p>
              Learners around the world are launching new careers, advancing in
              their fields, and enriching their lives.
            </p>
            <button>
              <h6>Find out how</h6>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Body;
