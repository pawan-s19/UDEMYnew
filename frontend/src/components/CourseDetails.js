import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  collectData,
  createCourseAsync,
  canNavigate,
} from "../reducersAndActions.js/courseSlice";
import Error from "./Error";
import Spinner from "react-bootstrap/Spinner";
const CourseDetails = () => {
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const d = useSelector((state) => state);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (d.courseSlice.canNavigate) navigate("/coursecurriculum");
    dispatch(canNavigate(false));
  }, [d.courseSlice.canNavigate]);

  const onSubmit = (data) => {
    let finalData = { ...d.courseSlice.collectedData, ...data, image: avatar };
    dispatch(createCourseAsync(finalData));
  };
  let changeHandler = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  useEffect(() => {
    if (!d.courseSlice.collectedData) navigate("/create/course/2");
  }, []);

  return (
    <Fragment>
      <div className="course-details p-3 w-100 d-flex justify-content-center">
        <div className="course-details-child h-100 w-75 px-5 py-4">
          <h2 className="fw-bold" style={{ fontFamily: "Suisse Work" }}>
            Course landing page
          </h2>
          <hr />
          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <div className="form-group">
              <label>Course title</label>
              <input
                style={{ backgroundColor: errors.title ? "#FFCCCB" : null }}
                {...register("title", { required: true })}
                type="text"
                className="form-control"
                placeholder="Insert your course Title."
                name="title"
              />
            </div>
            <div className="form-group">
              <label>Course subtitle</label>
              <input
                style={{ backgroundColor: errors.subtitle ? "#FFCCCB" : null }}
                {...register("subtitle", { required: true })}
                type="text"
                className="form-control"
                placeholder="Insert your course subtitle."
                name="subtitle"
              />
            </div>
            <div className="form-group">
              <label>Course description</label>
              <input
                style={{
                  backgroundColor: errors.description ? "#FFCCCB" : null,
                }}
                {...register("description", { required: true })}
                type="text"
                className="form-control pb-5"
                placeholder="Insert your course description."
                name="description"
              />
            </div>
            <div className="basic-info ">
              <label>Basic info</label>
              <div className="d-flex flex-wrap">
                <div className="form-group w-25 me-5">
                  <select
                    style={{
                      backgroundColor: errors.language ? "#FFCCCB" : null,
                    }}
                    {...register("language", { required: true })}
                    name="language"
                    className="form-control"
                  >
                    <option>English (US)</option>
                    <option>Hindi</option>
                    <option>French</option>
                    <option>Japanese</option>
                    <option>Telugu</option>
                  </select>
                </div>
                <div className="form-group w-25 me-5">
                  <select
                    style={{
                      backgroundColor: errors.difficulty ? "#FFCCCB" : null,
                    }}
                    {...register("difficulty", { required: true })}
                    name="difficulty"
                    className="form-control"
                  >
                    <option value=""> --Select level--</option>
                    <option>Begginer level</option>
                    <option>Intermediate level</option>
                    <option>Expert level</option>
                    <option>All levels</option>
                  </select>
                </div>
                <div className="form-group w-25 me-5">
                  <select
                    style={{
                      backgroundColor: errors.category ? "#FFCCCB" : null,
                    }}
                    {...register("category", { required: true })}
                    name="category"
                    className="form-control"
                  >
                    <option value="">Choose a category</option>
                    <option>Development</option>
                    <option>Business</option>
                    <option>Finance & Accounting</option>
                    <option>IT & Software</option>
                    <option>Office Productivity</option>
                    <option>Design</option>
                    <option>Marketing</option>
                    <option>I don't know yet</option>
                  </select>
                </div>
                <div className="form-group w-25 ">
                  <select
                    style={{
                      backgroundColor: errors.subCategory ? "#FFCCCB" : null,
                    }}
                    {...register("subCategory", { required: true })}
                    name="subCategory"
                    className="form-control"
                  >
                    <option value="">Choose a sub-category</option>
                    <option>Entrepreneurship</option>
                    <option>Communication</option>
                    <option>Management</option>
                    <option>Sales</option>
                    <option>Buisness Strategy</option>
                    <option>Operations</option>
                    <option>Project Management</option>
                    <option>Coding</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group mt-4 ">
              <label>What is primarily taught in your course</label>
              <input
                style={{
                  backgroundColor: errors.primaryGoal ? "#FFCCCB" : null,
                }}
                {...register("primaryGoal", { required: true })}
                type="text"
                className="form-control "
                placeholder="e.g. Landscape Photography"
                name="primaryGoal"
              />
            </div>
            <div className="upload-image">
              <label>Course image</label>
              <div class="image-input-wrapper d-flex">
                <div
                  className="image-container"
                  style={{ height: "17vmax", width: "30vmax" }}
                >
                  <img
                    data-purpose="image-preview"
                    alt=""
                    height="422"
                    width="750"
                    className=""
                    src="https://s.udemycdn.com/course/750x422/placeholder.jpg"
                  />
                </div>
                <div className="image-text-inputs ms-5 w-50">
                  <h6 className="fw-normal">
                    Upload your course image here. It must meet our course image
                    quality standards to be accepted. Important guidelines:
                    750x422 pixels; .jpg, .jpeg,. gif, or .png. no text on the
                    image.
                  </h6>
                  <div className="form-group mt-4">
                    <input
                      onChange={changeHandler}
                      style={{
                        backgroundColor: errors.image ? "#FFCCCB" : null,
                      }}
                      type="file"
                      className="form-control px-3"
                      name="image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex ">
              {d.courseSlice.loading ? (
                <Spinner
                  animation="border"
                  role="status"
                  className="ms-auto mt-5 p-3"
                ></Spinner>
              ) : (
                <button
                  className="px-5 py-2 mt-5 text-light fs-6 fw-bold ms-auto border-0"
                  style={{ backgroundColor: "#8a2be2" }}
                >
                  Create Course
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default CourseDetails;
