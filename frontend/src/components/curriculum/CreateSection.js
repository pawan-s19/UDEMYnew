import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createSection } from "../../reducersAndActions.js/curriculumSlice";
const CreateSection = (props) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const d = useSelector((state) => state);
  console.log(d.courseSlice);
  const submitHandler = (data) => {
    dispatch(
      createSection({
        name: data.title,
        courseId: d.courseSlice.createdCourse._id,
      })
    );

    props.setToggle(!props.toggle);
  };

  return (
    <div className="border border-dark py-3 px-4 mb-4">
      <span>New Section :</span>
      <form onSubmit={handleSubmit(submitHandler)} className="mt-2">
        <input
          name="title"
          {...register("title", { required: true })}
          type="text"
          style={{
            height: "35px",
            boxShadow: "none",
            backgroundColor: errors.title ? "#FFCCCB" : null,
          }}
          className="form-control"
          placeholder="Enter a Title"
        />

        <button
          type="submit"
          style={{ fontSize: "0.8em" }}
          className="btn btn-secondary rounded-0"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default CreateSection;
