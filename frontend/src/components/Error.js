import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { useSelector, useDispatch } from "react-redux";
import { clearError } from "../reducersAndActions.js/courseSlice";
const Error = () => {
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.courseSlice.error);

  const hideError = () => {
    dispatch(clearError());
  };

  return (
    <div>
      <Col md={6} className="mb-2 ms-4" style={{ position: "fixed" }}>
        <ToastContainer>
          <Toast
            show={isError ? true : false}
            onClose={hideError}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <strong className="me-auto">Sorry!!</strong>
            </Toast.Header>
            <Toast.Body>{isError}</Toast.Body>
          </Toast>
        </ToastContainer>
      </Col>
    </div>
  );
};

export default Error;
