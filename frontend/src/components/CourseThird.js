import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { collectData } from "../reducersAndActions.js/courseSlice";
const CourseThird = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let updatedObject = {
      aim: [data.aim1, data.aim2, data.aim3, data.aim4],
      preRequisites: [
        data.preRequisites1,
        data.preRequisites2,
        data.preRequisites3,
        data.preRequisites4,
      ],
      targetAudience: [
        data.targetAudience1,
        data.targetAudience2,
        data.targetAudience3,
        data.targetAudience4,
      ],
    };
    dispatch(collectData(updatedObject));
    navigate("/create/course/landingpage");
  };

  return (
    <div className="course-details p-3 w-100 d-flex justify-content-center">
      <div className="course-details-child h-100 w-75 px-5 py-4">
        <h2 className="fw-bold" style={{ fontFamily: "Suisse Work" }}>
          Intended learners
        </h2>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="part-1">
            <div className="form-group">
              <label>What will students learn in your course?</label>
              <input
                style={{ backgroundColor: errors.aim1 ? "#FFCCCB" : null }}
                {...register("aim1", { required: true })}
                type="text"
                className="form-control"
                placeholder="Example: Define the roles and responsibilities of a project manager"
              />
            </div>
            <div className="form-group">
              <input
                style={{ backgroundColor: errors.aim2 ? "#FFCCCB" : null }}
                {...register("aim2", { required: true })}
                type="text"
                className="form-control"
                placeholder="Example: Estimate project timelines and budgets"
              />
            </div>
            <div className="form-group">
              <input
                style={{ backgroundColor: errors.aim3 ? "#FFCCCB" : null }}
                {...register("aim3", { required: true })}
                type="text"
                className="form-control"
                placeholder="Example: Identify and manage project risks."
              />
            </div>
            <div className="form-group">
              <input
                style={{ backgroundColor: errors.aim4 ? "#FFCCCB" : null }}
                {...register("aim4", { required: true })}
                type="text"
                className="form-control"
                placeholder="Example: Complete a case study to manage a project from conception to completion."
              />
            </div>
          </div>
          <div className="part-2 mt-5">
            <div className="form-group ">
              <label>
                What are the requirements or prerequisites for taking your
                course?
              </label>
              <input
                style={{
                  backgroundColor: errors.preRequisites1 ? "#FFCCCB" : null,
                }}
                {...register("preRequisites1", { required: true })}
                type="text"
                className="form-control"
                placeholder="Example: No proggramming experience needed."
              />
            </div>
            <div className="form-group">
              <input
                style={{
                  backgroundColor: errors.preRequisites2 ? "#FFCCCB" : null,
                }}
                {...register("preRequisites2", { required: true })}
                type="text"
                className="form-control"
                placeholder="Example: No proggramming experience needed."
              />
            </div>
            <div className="form-group">
              <input
                style={{
                  backgroundColor: errors.preRequisites3 ? "#FFCCCB" : null,
                }}
                {...register("preRequisites3", { required: true })}
                type="text"
                className="form-control"
                placeholder="Example: No proggramming experience needed."
              />
            </div>
            <div className="form-group">
              <input
                style={{
                  backgroundColor: errors.preRequisites4 ? "#FFCCCB" : null,
                }}
                {...register("preRequisites4", { required: true })}
                type="text"
                className="form-control"
                placeholder="Example: No proggramming experience needed."
              />
            </div>
          </div>
          <div className="part-3 mt-5">
            <div className="form-group ">
              <label>Who is this course for ?</label>
              <input
                style={{
                  backgroundColor: errors.targetAudience1 ? "#FFCCCB" : null,
                }}
                {...register("targetAudience1", { required: true })}
                type="text"
                className="form-control"
                placeholder="Example:Begginer python developers curious about data science."
              />
            </div>
            <div className="form-group">
              <input
                style={{
                  backgroundColor: errors.targetAudience2 ? "#FFCCCB" : null,
                }}
                {...register("targetAudience2", { required: true })}
                type="text"
                className="form-control"
                placeholder="Example:Begginer python developers curious about data science."
              />
            </div>
            <div className="form-group">
              <input
                style={{
                  backgroundColor: errors.targetAudience3 ? "#FFCCCB" : null,
                }}
                {...register("targetAudience3", { required: true })}
                type="text"
                className="form-control"
                placeholder="Example:Begginer python developers curious about data science."
              />
            </div>
            <div className="form-group">
              <input
                style={{
                  backgroundColor: errors.targetAudience4 ? "#FFCCCB" : null,
                }}
                {...register("targetAudience4", { required: true })}
                type="text"
                className="form-control"
                placeholder="Example:Begginer python developers curious about data science."
              />
            </div>
          </div>
          <div className="d-flex ">
            <button
              className="px-5 py-2 mt-5 text-light fs-6 fw-bold ms-auto border-0"
              style={{ backgroundColor: "#8a2be2" }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseThird;
