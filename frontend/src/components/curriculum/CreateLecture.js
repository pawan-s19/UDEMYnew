import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
const CreateLecture = (props) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  let submitHandler = (data) => {
    console.log(data);
    props.setToggle(!props.toggle);
    props.sectionDetails.lecture.push({ title: data.title, id: nanoid() });
  };

  return (
    <div className="border border-dark py-3 px-4 mb-4">
      <span>New Lecture :</span>
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

export default CreateLecture;
