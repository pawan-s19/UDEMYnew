import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearErrors, signupAsync } from "../reducersAndActions.js/userSlice";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
const Signup = () => {
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();
  const d = useSelector((d) => d);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (d.userSlice.error) alert.show(d.userSlice.error);
    dispatch(clearErrors());
    if (d.userSlice.isAuthenticated) navigate("/profile");
  }, [d.userSlice.error, d.userSlice.user]);

  //set value in formData use state
  let changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //submit handler for form dispatches the signupAsync action
  let submitHandler = (e) => {
    e.preventDefault();
    dispatch(signupAsync(formData));
  };
  return (
    <div className="signup container d-flex flex-column align-items-center mb-5">
      <form className="w-25" onSubmit={submitHandler}>
        <div className="form-group">
          <h6>Sign up and start learning</h6>
          <hr />
          <input
            onChange={changeHandler}
            type="text"
            name="username"
            className="form-control mt-4"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Username or Full name"
            value={formData.username}
          />
        </div>
        <div className="form-group">
          <input
            onChange={changeHandler}
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            value={formData.email}
          />
        </div>
        <div className="form-group">
          <input
            onChange={changeHandler}
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={formData.password}
          />
        </div>
        {d.userSlice.loading ? (
          <div className="d-flex justify-content-center">
            <Spinner
              animation="border"
              role="status"
              className=" mt-5 p-3"
            ></Spinner>
          </div>
        ) : (
          <button type="submit" className="btn btn-primary w-100">
            Sign up
          </button>
        )}
      </form>
      <hr />

      <h6
        style={{ fontSize: "1vmax", fontWeight: "400", fontFamily: "Gilroy" }}
      >
        Already have an account ? <Link to="/login">Log in</Link>{" "}
      </h6>
    </div>
  );
};

export default Signup;
