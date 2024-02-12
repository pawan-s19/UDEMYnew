import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import "../stylesheets/Nav.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProfileOptions from "./ProfileOptions";
import ReactTooltip from "react-tooltip";

const Nav = () => {
  const d = useSelector((d) => d);
  const [ishover, setIshover] = useState(false);
  useEffect(() => {
    console.log(d.userSlice.isAuthenticated);
  }, [d.userSlice.isAuthenticated]);

  return (
    <div className="nav align-items-center justify-content-between px-4">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <h2>
          <span
            style={{
              color: "purple",
              fontWeight: 700,
              fontFamily: "Brandon Grotesque",
            }}
          >
            U
          </span>
          demy
        </h2>
      </Link>
      <h6>Categories</h6>
      <input placeholder="Search for anything" type="text"></input>
      <h6>Udemy Buisness</h6>
      <NavLink
        to="/create/course"
        style={{ textDecoration: "none", color: "black" }}
      >
        <h6>Teach on Udemy </h6>
      </NavLink>
      <h6>
        <NavLink
          to="/wishlist"
          style={{ textDecoration: "none", color: "black" }}
        >
          <i
            data-padding="1vmax"
            data-effect="solid"
            data-place="bottom"
            data-tip="Your wishlist is empty"
            className="ri-heart-line"
          ></i>
          <ReactTooltip />
        </NavLink>
      </h6>
      <h6>
        <Link style={{ textDecoration: "none", color: "black" }} to="/cart">
          <i className="ri-shopping-cart-2-line"></i>
        </Link>
      </h6>
      {d.userSlice.isAuthenticated ? (
        <Fragment>
          <div
            onMouseOver={() => {
              setIshover(true);
            }}
            onMouseOut={() => setIshover(false)}
          >
            <h6 className="profile-container">
              <Link to="/public/profile" className="profile-link">
                <div className="profile d-flex justify-content-center align-items-center ">
                  {d.userSlice &&
                  d.userSlice.user.username.split(" ").length > 1
                    ? d.userSlice.user.username.split(" ")[0][0].toUpperCase() +
                      d.userSlice.user.username.split(" ")[1][0].toUpperCase()
                    : d.userSlice.user.username[0].toUpperCase()}
                </div>
              </Link>
              {ishover ? <ProfileOptions /> : null}
            </h6>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <h6>
            <NavLink
              className="auth-link"
              to="/login"
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
                backgroundColor: isActive ? " rgb(30, 30, 30)" : "white",
              })}
            >
              Log In
            </NavLink>
          </h6>
          <h6>
            <NavLink
              className="auth-link"
              to="/signup"
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
                backgroundColor: isActive ? " rgb(30, 30, 30)" : "white",
              })}
            >
              Sign Up
            </NavLink>
          </h6>
        </Fragment>
      )}

      <h6>
        {" "}
        <button className="py-0 px-1 auth-link">
          <i className="ri-translate-2"></i>
        </button>
      </h6>
    </div>
  );
};

export default Nav;
