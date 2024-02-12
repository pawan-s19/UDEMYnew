import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../asset/download-removebg-preview.png";
import { clearErrors, loginAsync } from "../reducersAndActions.js/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useAlert } from "react-alert";
import Spinner from "react-bootstrap/Spinner";
const Login = () => {
  const navigate = useNavigate();
  const alert = useAlert();
  const d = useSelector((e) => e);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (d.userSlice.error) alert.show(d.userSlice.error);
    dispatch(clearErrors());
    if (d.userSlice.isAuthenticated) navigate("/profile");
  }, [d.userSlice.error, d.userSlice.user]);

  //set value in formData use state
  let changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //submit handler for form dispatches the loginAsync action
  let submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginAsync(formData));
  };
  return (
    <div className="login signup container d-flex flex-column align-items-center mb-5">
      <form className="w-25" onSubmit={submitHandler}>
        <div className="form-group">
          <h6>
            Login to your{" "}
            <span
              style={{
                color: "purple",
                fontWeight: 800,
                fontFamily: "Brandon Grotesque",
              }}
            >
              U
            </span>
            demy account
          </h6>
          <hr />
          <button
            style={{
              backgroundColor: "white",
              color: "black",
              boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
              fontSize: "1vmax",
            }}
            type="button"
            className="btn btn-primary w-100 d-flex align-items-center px-4"
          >
            <img
              className="me-2"
              src={googleLogo}
              style={{ height: "1.7vw", width: "1.7vw" }}
            />
            Continue with Google
          </button>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
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
            Log in
          </button>
        )}
      </form>
      <hr />

      <h6
        style={{ fontSize: "1vmax", fontWeight: "400", fontFamily: "Gilroy" }}
      >
        Don't have an accout ? <Link to="/signup">Sign up</Link>{" "}
      </h6>
    </div>
  );
};

export default Login;
