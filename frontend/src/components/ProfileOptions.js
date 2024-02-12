import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutAsync } from "../reducersAndActions.js/userSlice";
const ProfileOptions = () => {
  const d = useSelector((d) => d);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="profile-option">
      <div className="profile-name-email d-flex align-items-center">
        <div
          className="profile d-flex justify-content-center align-items-center"
          style={{
            height: "2em",
            width: "2em",
            borderRadius: "50%",
            fontSize: "2vmax",
          }}
        >
          {d.userSlice.user.username.split(" ").length > 1
            ? d.userSlice.user.username.split(" ")[0][0].toUpperCase() +
              d.userSlice.user.username.split(" ")[1][0].toUpperCase()
            : d.userSlice.user.username[0].toUpperCase()}
        </div>
        <div className="ms-3">
          <h6
            style={{
              color: "black",
              fontSize: "1.2vmax",
              fontFamily: "Gilroy",
              fontWeight: "800",
            }}
          >
            {d.userSlice.user.username}
          </h6>
          <h6
            style={{
              color: "black",
              fontSize: "0.8vmax",
              marginTop: "-0.2vmax",
            }}
          >
            {d.userSlice.user.email}
          </h6>
        </div>
      </div>
      <hr />
      <h6>My Cart</h6>
      <h6>Edit Profile</h6>
      <h6>Account Settings</h6>
      <hr />
      <h6
        onClick={() => {
          dispatch(logOutAsync());
          navigate("/");
        }}
      >
        Log out
      </h6>
    </div>
  );
};

export default ProfileOptions;
