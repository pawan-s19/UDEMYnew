import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { collectData } from "../reducersAndActions.js/courseSlice";
import { useDispatch } from "react-redux";
export default function CourseFirst() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(collectData(data));
    navigate("/create/course/2");
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "60%", width: "100%" }}
    >
      <h1 style={{ fontFamily: "Suisse Work", fontWeight: "900" }}>
        How about a working title
      </h1>
      <h6 className="fs-6 mt-3">
        It's ok if you can't think of a good title now. You can change it later.
      </h6>
      <form onSubmit={handleSubmit(onSubmit)} className="w-25 mt-5">
        <input
          style={{ backgroundColor: errors.titleMain ? "#FFCCCB" : null }}
          {...register("titleMain", { required: true })}
          className="form-control rounded-0 py-2 border border-dark"
          placeholder="e.g. Learn Photoshop CS6 from Scratch"
        ></input>

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
}
