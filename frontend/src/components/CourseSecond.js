import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { collectData } from "../reducersAndActions.js/courseSlice";
const CourseSecond = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const d = useSelector((state) => state);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(collectData(data));
    navigate("/create/course/3");
  };
  console.log(d.courseSlice.collectedData);
  useEffect(() => {
    if (d.courseSlice.collectedData === null) {
      navigate("/create/course/1");
    }
  }, []);

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "60%", width: "100%" }}
    >
      <h1 style={{ fontFamily: "Suisse Work", fontWeight: "900" }}>
        What category best fits the knowledge you'll share?
      </h1>
      <h6 className="fs-6 mt-3">
        If you're not sure about the right category, you can change it later.
      </h6>
      <form className="w-25 mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group  ">
          <select
            style={{ backgroundColor: errors.category ? "#FFCCCB" : null }}
            {...register("category", { required: true })}
            className="form-control rounded-0 py-2 border border-dark "
          >
            {" "}
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
        <div className="d-flex justify-content-center">
          <button
            style={{ backgroundColor: "rgba(21, 21, 21, 0.986)" }}
            className="px-5 py-1 mt-5 text-light fw-bolder"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseSecond;
