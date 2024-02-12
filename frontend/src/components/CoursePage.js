import React from "react";
import "../stylesheets/coursepage.css";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
const CoursePage = () => {
  return (
    <div className="course-page">
      <div className="top d-flex ">
        <div className="course-info">
          <div
            className="d-flex align-items-center"
            style={{ fontSize: "0.9vmax" }}
          >
            <Link style={{ textDecoration: "none", color: "#C3C0FC" }}>
              Development
            </Link>

            <i className="ri-arrow-drop-right-line mt-1 fs-5"></i>

            <Link style={{ textDecoration: "none", color: "#C3C0FC" }}>
              Web Development
            </Link>
          </div>
          <h2>Data structures and Algorithms</h2>
          <h5 className="fw-normal">
            Become a Full-Stack Web Developer with just ONE course. HTML, CSS,
            Javascript, Node, React, MongoDB, Web3 and DApps
          </h5>
          <div className="d-flex align-items-center">
            <h6 className="best-seller-tag text-dark">Best Seller</h6>
            <h6 className="d-flex align-items-center mt-2 ms-2">
              <span style={{ color: "rgb(158, 118, 19)" }}>4.3</span>
              <ReactStars
                className="ms-1"
                count={5}
                size={15}
                value={3.5}
                edit={false}
              ></ReactStars>
              <span
                className="ms-1"
                style={{
                  fontSize: "0.9vmax",
                }}
              >
                (3,900)
              </span>
              <span
                className="ms-1"
                style={{
                  fontSize: "0.9vmax",
                }}
              >
                (0 students)
              </span>
            </h6>{" "}
          </div>
          <h6 style={{ fontSize: "0.9vmax", fontWeight: "400" }}>
            Created by{" "}
            <Link style={{ textDecoration: "none", color: "#C3C0FC" }}>
              Pawan singh
            </Link>
          </h6>
          <h6
            className="d-flex align-items-center"
            style={{ fontSize: "0.9vmax", fontWeight: "400" }}
          >
            {" "}
            <i className="ri-global-line fs-6 me-2"></i>English
          </h6>
        </div>
        <div className="course-preview-video">
          <div className="video-container">
            <div className="video-thumbnail">
              <img src="data:image/jpeg;base64,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"></img>
            </div>
          </div>
          <div className="course-preview-video-bottom p-3">
            <h3 style={{ fontFamily: "Gilroy", fontSize: "1.7vmax" }}>₹3400</h3>
            <div className="d-flex align-items-center mt-1 justify-content-between">
              <button
                className="px-5 py-2  text-light fs-6 fw-bold border-0 "
                style={{ backgroundColor: "#8a2be2", width: "15vmax" }}
              >
                Buy this Course
              </button>
              <button
                className="px-2"
                style={{
                  backgroundColor: "white",
                  width: "fit-content",
                  border: "1px solid black",
                }}
              >
                <i className="ri-heart-line fs-4 "></i>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="supreme-wrapper">
          <div className="aim">
            <h4 className="fs-4">What you'll learn</h4>
            <div className="secondary-wrapper d-flex w-100 flex-wrap">
              <div
                className="d-flex w-50 mb-2"
                style={{ fontSize: "0.95vmax" }}
              >
                <i className="ri-check-line fs-6 me-2"></i>
                Define roles and responsibiliities of project manager
              </div>
              <div
                className="d-flex w-50 mb-2"
                style={{ fontSize: "0.95vmax" }}
              >
                <i className="ri-check-line fs-6 me-2"></i>
                Define roles and responsibiliities of project manager
              </div>
              <div
                className="d-flex w-50 mb-2"
                style={{ fontSize: "0.95vmax" }}
              >
                <i className="ri-check-line fs-6 me-2"></i>
                Define roles and responsibiliities of project manager
              </div>
              <div
                className="d-flex w-50 mb-2"
                style={{ fontSize: "0.95vmax" }}
              >
                <i className="ri-check-line fs-6 me-2"></i>
                Define roles and responsibiliities of project manager
              </div>
              <div
                className="d-flex w-50 mb-2"
                style={{ fontSize: "0.95vmax" }}
              >
                <i className="ri-check-line fs-6 me-2"></i>
                You will master both front and back-end development, becoming a
                full-stack developer by the end of the course.{" "}
              </div>
              <div
                className="d-flex w-50 mb-2"
                style={{ fontSize: "0.95vmax" }}
              >
                <i className="ri-check-line fs-6 me-2"></i>
                You will learn the latest technologies, including Javascript,
                React, Node and even Web3 development.
              </div>
            </div>
          </div>
          <div className="requirements mt-4">
            <h4 className="fw-bold mb-3">Requirements</h4>
            <div
              className="d-flex align-items-center  w-50 mb-2"
              style={{ fontSize: "0.95vmax" }}
            >
              <i
                className="ri-checkbox-blank-circle-fill me-3"
                style={{ fontSize: "0.5vmax" }}
              ></i>
              Define roles and responsibiliities of project manager
            </div>
            <div
              className="d-flex align-items-center  w-50 mb-2"
              style={{ fontSize: "0.95vmax" }}
            >
              <i
                className="ri-checkbox-blank-circle-fill me-3"
                style={{ fontSize: "0.5vmax" }}
              ></i>
              Define roles and responsibiliities of project manager
            </div>
            <div
              className="d-flex align-items-center  w-50 mb-2"
              style={{ fontSize: "0.95vmax" }}
            >
              <i
                className="ri-checkbox-blank-circle-fill me-3"
                style={{ fontSize: "0.5vmax" }}
              ></i>
              Define roles and responsibiliities of project manager
            </div>
            <div
              className="d-flex align-items-center  w-50 mb-2"
              style={{ fontSize: "0.95vmax" }}
            >
              <i
                className="ri-checkbox-blank-circle-fill me-3"
                style={{ fontSize: "0.5vmax" }}
              ></i>
              Define roles and responsibiliities of project manager
            </div>
          </div>
          <div className="description mt-4">
            <h4 className="fw-bold">Description</h4>
            <div className="mb-2" style={{ fontSize: "0.95vmax" }}>
              Welcome to the Complete Web Development Bootcamp, the only course
              you need to learn to code and become a full-stack web developer.
              With 150,000+ ratings and a 4.8 average, my Web Development course
              is one of the HIGHEST RATED courses in the history of Udemy! At
              65+ hours, this Web Development course is without a doubt the most
              comprehensive web development course available online. Even if you
              have zero programming experience, this course will take you from
              beginner to mastery. Here's why: The course is taught by the lead
              instructor at the App Brewery, London's leading in-person
              programming bootcamp. The course has been updated to be 2023 ready
              and you'll be learning the latest tools and technologies used at
              large companies such as Apple, Google and Netflix. This course
              doesn't cut any corners, there are beautiful animated explanation
              videos and tens of real-world projects which you will get to
              build. The curriculum was developed over a period of four years,
              with comprehensive student testing and feedback. We've taught over
              a million students how to code and many have gone on to change
              their lives by becoming professional developers or starting their
              own tech startup. You'll save yourself over $12,000 by enrolling,
              but still get access to the same teaching materials and learn from
              the same instructor and curriculum as our in-person programming
              bootcamp. The course is constantly updated with new content, with
              new projects and modules determined by students - that's you! CSS
              3 Bootstrap 4 Javascript ES6 DOM Manipulation jQuery Bash Command
              Line Git, GitHub and Version Control Backend Web Development
              Node.js NPM Express.js EJS REST APIs Databases SQL MongoDB
              Mongoose Authentication Firebase React.js React Hooks Web Design
              Deployment with GitHub Pages, Heroku and MongoDB Atlas Web3
              Development on the Internet Computer Blockchain technology Token
              contract development NFT minting, buying and selling logic
            </div>
          </div>
          <div className="target-audience mt-4">
            <h4 className="fw-bold mb-3">Who this course is for</h4>
            <div
              className="d-flex align-items-center mb-2"
              style={{ fontSize: "0.95vmax" }}
            >
              <i
                className="ri-checkbox-blank-circle-fill me-3"
                style={{ fontSize: "0.5vmax" }}
              ></i>
              If you want to learn to code through building fun and useful
              projects, then take this course.
            </div>
            <div
              className="d-flex align-items-center mb-2"
              style={{ fontSize: "0.95vmax" }}
            >
              <i
                className="ri-checkbox-blank-circle-fill me-3"
                style={{ fontSize: "0.5vmax" }}
              ></i>
              If you are a seasoned programmer, then take this course to to get
              up to speed quickly with the latest frameworks and NodeJS
            </div>
            <div
              className="d-flex align-items-center mb-2"
              style={{ fontSize: "0.95vmax" }}
            >
              <i
                className="ri-checkbox-blank-circle-fill me-3"
                style={{ fontSize: "0.5vmax" }}
              ></i>
              If you want to take ONE COURSE and learn everything you need to
              know about web development, take this course
            </div>
          </div>
          <div className="course-content mt-5">
            <h4 className="fw-bold">Course Content</h4>
            <div
              className="d-flex align-items-center mb-2 mt-3"
              style={{ fontSize: "0.95vmax" }}
            >
              41 sections
              <i
                className="ri-checkbox-blank-circle-fill mt-1 mx-1"
                style={{ fontSize: "0.3vmax" }}
              ></i>
              490 lectures
              <i
                className="ri-checkbox-blank-circle-fill mt-1 mx-1"
                style={{ fontSize: "0.3vmax" }}
              ></i>
              65hr 33min total
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
