import React, { Fragment, useState } from "react";

const Lecture = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-light border border-dark p-2 mb-4">
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <div className="d-flex align-items-center flex-wrap">
          <h6>
            {" "}
            <i
              style={{ fontSize: "0.83em" }}
              className="ri-check-line border rounded-circle bg-dark text-light me-2"
            ></i>
          </h6>

          <h6 className="">Lecture {props.index + 1} :</h6>
          <h6 className="mx-2">
            {" "}
            <i className="ri-file-line"></i>
          </h6>
          <h6>{props.lectureDetails.title}</h6>
        </div>
        <button
          style={{ fontSize: "0.8em" }}
          className="btn border border-dark rounded-0 p-1 px-2"
        >
          <h6
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? "Cancel" : "+Content"}
          </h6>
        </button>
      </div>
      {toggle ? (
        <Fragment>
          {" "}
          <div>
            <h6 className="border-bottom border-secondary pb-2">
              Upload Video
            </h6>

            <input
              className="form-control rounded-0"
              type="file"
              accept="video/mp4,video/x-m4v,video/*"
            ></input>
          </div>
        </Fragment>
      ) : null}
    </div>
  );
};

export default Lecture;
