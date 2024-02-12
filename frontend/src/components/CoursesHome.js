import React from "react";
import { NavLink } from "react-router-dom";
import CoursesHomeContainer from "./CoursesHomeContainer";
const CoursesHome = () => {
  return (
    <div className="courses-home mt-5">
      <h2>A broad selection of courses</h2>
      <h5 className="dets mt-3">
        Choose from 204,000 online video courses with new additions published
        every month
      </h5>
      <CoursesHomeContainer />
    </div>
  );
};

export default CoursesHome;
