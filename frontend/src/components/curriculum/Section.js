import React, { Fragment, useState } from "react";
import CreateLecture from "./CreateLecture";
import Lecture from "./Lecture";

const Section = (props) => {
  const [showIcon, setShowIcon] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setShowIcon(true);
      }}
      onMouseLeave={() => {
        setShowIcon(false);
      }}
      style={{ backgroundColor: "whitesmoke" }}
      className="w-100 border border-dark mt-5 p-3 mb-4"
    >
      <div className="d-flex flex-wrap">
        <h6 className="me-3">Section {props.index + 1} :</h6>
        <span className="d-flex ">
          <h6 className="me-2">
            <i className="ri-file-line"></i>{" "}
          </h6>
          <h6>{props.sectionDetails.title}</h6>
        </span>
        {showIcon ? (
          <Fragment>
            <i className="ri-pencil-line ms-2 "></i>
            <i
              className="ri-delete-bin-line ms-2 "
              onClick={() => {
                props.setSection(
                  props.section.filter((e) => e.id !== props.sectionDetails.id)
                );
              }}
            ></i>
          </Fragment>
        ) : null}
      </div>

      {props.sectionDetails.lecture.map((e, i) => (
        <Lecture lectureDetails={e} key={e.id} index={i} />
      ))}
      {toggle ? (
        <CreateLecture
          sectionDetails={props.sectionDetails}
          toggle={toggle}
          setToggle={setToggle}
        />
      ) : null}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
        style={{ fontSize: "0.8em" }}
        className="btn border border-dark rounded-0 mt-2"
      >
        {toggle ? "Cancel" : "+ Curriculum Item"}
      </button>
    </div>
  );
};

export default Section;
