import React, { Fragment, useState } from "react";
import Error from "../Error";
import Accordion from "react-bootstrap/Accordion";
import CreateSection from "./CreateSection";
import Section from "./Section";
import { useSelector } from "react-redux";
const Curriculum = () => {
  const [toggle, setToggle] = useState(false)
  
  return (
    <Fragment>
      <Error />
      <div className="course-details p-3 w-100 d-flex justify-content-center">
        <div className="course-details-child h-100 w-75 px-5 py-4">
          <h2 className="fw-bold" style={{ fontFamily: "Suisse Work" }}>
            Curriculum
          </h2>
          <hr />
          {/* <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion> */}
          <p>
            Start putting together your course by creating sections, lectures
            and practice activities (quizzes, coding exercises and assignments).
            Use your course outline to structure your content and label your
            sections and lectures clearly. If you’re intending to offer your
            course for free, the total length of video content must be less than
            2 hours.
          </p>
          {/* {d.courseSlice.createdCourse.sections?.d.courseSlice.createdCourse.sections.map(
            (e, i) => (
              <Section key={e.id} sectionDetails={e} index={i} />
            )
          )} */}
          {toggle ? (
            <CreateSection toggle={toggle} setToggle={setToggle} />
          ) : (
            ""
          )}
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
            style={{ fontSize: "0.8em" }}
            className="btn border border-dark rounded-0"
          >
            {toggle ? "Cancel" : "+ Add Section"}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Curriculum;
