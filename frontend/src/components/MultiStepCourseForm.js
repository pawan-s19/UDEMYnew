import React, { Fragment } from "react";
import "../stylesheets/multistepcourseform.css";
import { Link } from "react-router-dom";

const MultiStepCourseForm = () => {
  return (
    <Fragment>
      <div className="initiate-course d-flex align-items-center justify-content-center ">
        <div className="d-flex create-course-card align-items-center px-5 justify-content-between ">
          <h6>Jump into Course section</h6>
          <Link to="/create/course/1" className="nav-link">
            <button className="px-5 py-2">
              <h6 className="mx-4 mt-2">Create your Course </h6>
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default MultiStepCourseForm;
