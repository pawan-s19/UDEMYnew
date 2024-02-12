import React from "react";
import ReactStars from "react-stars";
import { Button } from "react-scroll";
const CoursesHomeContainer = () => {
  return (
    <div className="course-home courses mt-3">
      <div className="categories-name d-flex">
        <h5 className="nav-link">Python</h5>
        <h5 className="nav-link">Excel</h5>
        <h5 className="nav-link">Web Development</h5>
        <h5 className="nav-link">JavaScript</h5>
        <h5 className="nav-link">Data Science</h5>
        <h5 className="nav-link">AWS Certification</h5>
        <h5 className="nav-link">Drawing</h5>
      </div>
      <div className="courses-container mt-2">
        <h3>Expand your career opportunities with Python</h3>
        <h6 className="w-75">
          Take one of Udemy’s range of Python courses and learn how to code
          using this incredibly useful language. Its simple syntax and
          readability makes Python perfect for Flask, Django, data science, and
          machine learning. You’ll learn how to build everything from games to
          sites to apps. Choose from a range of courses that will appeal to
        </h6>
        <button className="mt-3">Explore Python</button>
        <div className="courses-grid d-flex ">
          <div className="course-card mt-5 ">
            <div className="course-image">
              <img src="https://images.unsplash.com/photo-1538439907460-1596cafd4eff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHl0aG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"></img>
            </div>
            <h6 className="course-name mt-2">
              Learn Python: The Complete Python Programming Course
            </h6>
            <h6 className="author">Avinash Jain, The Codex</h6>
            <div className="course-card-rating">
              <h6 className="d-flex align-items-center">
                <span style={{ color: "rgb(158, 118, 19)" }}>4.3</span>
                <ReactStars
                  className="ms-1"
                  count={5}
                  size={18}
                  value={3.5}
                  edit={false}
                ></ReactStars>
                <span
                  className="ms-1"
                  style={{
                    fontSize: "0.9vmax",
                    color: " rgba(71, 70, 70, 0.737)",
                  }}
                >
                  (3,900)
                </span>
              </h6>
              <h6 style={{ color: "black" }}>
                ₹289{" "}
                <span
                  className="ms-1"
                  style={{
                    fontSize: "0.9vmax",
                    color: " rgba(71, 70, 70, 0.737)",
                    textDecoration: "line-through",
                  }}
                >
                  (₹3,900)
                </span>
              </h6>
            </div>
          </div>
          <div className="course-card mt-5 ">
            <div className="course-image">
              <img src="https://images.unsplash.com/photo-1538439907460-1596cafd4eff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHl0aG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"></img>
            </div>
            <h6 className="course-name mt-2">
              Learn Python: The Complete Python Programming Course
            </h6>
            <h6 className="author">Avinash Jain, The Codex</h6>
            <div className="course-card-rating">
              <h6 className="d-flex align-items-center">
                <span style={{ color: "rgb(158, 118, 19)" }}>4.3</span>
                <ReactStars
                  className="ms-1"
                  count={5}
                  size={18}
                  value={3.5}
                  edit={false}
                ></ReactStars>
                <span
                  className="ms-1"
                  style={{
                    fontSize: "0.9vmax",
                    color: " rgba(71, 70, 70, 0.737)",
                  }}
                >
                  (3,900)
                </span>
              </h6>
              <h6 style={{ color: "black" }}>
                ₹289{" "}
                <span
                  className="ms-1"
                  style={{
                    fontSize: "0.9vmax",
                    color: " rgba(71, 70, 70, 0.737)",
                    textDecoration: "line-through",
                  }}
                >
                  (₹3,900)
                </span>
              </h6>
              <h6 className="best-seller-tag">Best Seller</h6>
            </div>
          </div>
          <div className="course-card mt-5 ">
            <div className="course-image">
              <img src="https://images.unsplash.com/photo-1538439907460-1596cafd4eff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHl0aG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"></img>
            </div>
            <h6 className="course-name mt-2">
              Learn Python: The Complete Python Programming Course
            </h6>
            <h6 className="author">Avinash Jain, The Codex</h6>
            <div className="course-card-rating">
              <h6 className="d-flex align-items-center">
                <span style={{ color: "rgb(158, 118, 19)" }}>4.3</span>
                <ReactStars
                  className="ms-1"
                  count={5}
                  size={18}
                  value={3.5}
                  edit={false}
                ></ReactStars>
                <span
                  className="ms-1"
                  style={{
                    fontSize: "0.9vmax",
                    color: " rgba(71, 70, 70, 0.737)",
                  }}
                >
                  (3,900)
                </span>
              </h6>
              <h6 style={{ color: "black" }}>
                ₹289{" "}
                <span
                  className="ms-1"
                  style={{
                    fontSize: "0.9vmax",
                    color: " rgba(71, 70, 70, 0.737)",
                    textDecoration: "line-through",
                  }}
                >
                  (₹3,900)
                </span>
              </h6>
            </div>
          </div>
          <div className="course-card mt-5 ">
            <div className="course-image">
              <img src="https://images.unsplash.com/photo-1538439907460-1596cafd4eff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHl0aG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"></img>
            </div>
            <h6 className="course-name mt-2">
              Learn Python: The Complete Python Programming Course
            </h6>
            <h6 className="author">Avinash Jain, The Codex</h6>
            <div className="course-card-rating">
              <h6 className="d-flex align-items-center">
                <span style={{ color: "rgb(158, 118, 19)" }}>4.3</span>
                <ReactStars
                  className="ms-1"
                  count={5}
                  size={18}
                  value={3.5}
                  edit={false}
                ></ReactStars>
                <span
                  className="ms-1"
                  style={{
                    fontSize: "0.9vmax",
                    color: " rgba(71, 70, 70, 0.737)",
                  }}
                >
                  (3,900)
                </span>
              </h6>
              <h6 style={{ color: "black" }}>
                ₹289{" "}
                <span
                  className="ms-1"
                  style={{
                    fontSize: "0.9vmax",
                    color: " rgba(71, 70, 70, 0.737)",
                    textDecoration: "line-through",
                  }}
                >
                  (₹3,900)
                </span>
              </h6>
            </div>
          </div>
          <div className="course-card mt-5 ">
            <div className="course-image">
              <img src="https://images.unsplash.com/photo-1538439907460-1596cafd4eff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHl0aG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"></img>
            </div>
            <h6 className="course-name mt-2">
              Learn Python: The Complete Python Programming Course
            </h6>
            <h6 className="author">Avinash Jain, The Codex</h6>
            <div className="course-card-rating">
              <h6 className="d-flex align-items-center">
                <span style={{ color: "rgb(158, 118, 19)" }}>4.3</span>
                <ReactStars
                  className="ms-1"
                  count={5}
                  size={18}
                  value={3.5}
                  edit={false}
                ></ReactStars>
                <span
                  className="ms-1"
                  style={{
                    fontSize: "0.9vmax",
                    color: " rgba(71, 70, 70, 0.737)",
                  }}
                >
                  (3,900)
                </span>
              </h6>
              <h6 style={{ color: "black" }}>
                ₹289{" "}
                <span
                  className="ms-1"
                  style={{
                    fontSize: "0.9vmax",
                    color: " rgba(71, 70, 70, 0.737)",
                    textDecoration: "line-through",
                  }}
                >
                  (₹3,900)
                </span>
              </h6>
            </div>
          </div>
          <div className="course-card mt-5 ">
            <div className="course-image">
              <img src="https://images.unsplash.com/photo-1538439907460-1596cafd4eff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHl0aG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"></img>
            </div>
            <h6 className="course-name mt-2">
              Learn Python: The Complete Python Programming Course
            </h6>
            <h6 className="author">Avinash Jain, The Codex</h6>
            <div className="course-card-rating">
              <h6 className="d-flex align-items-center">
                <span style={{ color: "rgb(158, 118, 19)" }}>4.3</span>
                <ReactStars
                  className="ms-1"
                  count={5}
                  size={18}
                  value={3.5}
                  edit={false}
                ></ReactStars>
                <span
                  className="ms-1"
                  style={{
                    fontSize: "0.9vmax",
                    color: " rgba(71, 70, 70, 0.737)",
                  }}
                >
                  (3,900)
                </span>
              </h6>
              <h6 style={{ color: "black" }}>
                ₹289{" "}
                <span
                  className="ms-1"
                  style={{
                    fontSize: "0.9vmax",
                    color: " rgba(71, 70, 70, 0.737)",
                    textDecoration: "line-through",
                  }}
                >
                  (₹3,900)
                </span>
              </h6>
            </div>
          </div>
          <div className="course-card mt-5 ">
            <div className="course-image">
              <img src="https://images.unsplash.com/photo-1538439907460-1596cafd4eff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHl0aG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"></img>
            </div>
            <h6 className="course-name mt-2">
              Learn Python: The Complete Python Programming Course
            </h6>
            <h6 className="author">Avinash Jain, The Codex</h6>
            <div className="course-card-rating">
              <h6 className="d-flex align-items-center">
                <span style={{ color: "rgb(158, 118, 19)" }}>4.3</span>
                <ReactStars
                  className="ms-1"
                  count={5}
                  size={18}
                  value={3.5}
                  edit={false}
                ></ReactStars>
                <span
                  className="ms-1"
                  style={{
                    fontSize: "0.9vmax",
                    color: " rgba(71, 70, 70, 0.737)",
                  }}
                >
                  (3,900)
                </span>
              </h6>
              <h6 style={{ color: "black" }}>
                ₹289{" "}
                <span
                  className="ms-1"
                  style={{
                    fontSize: "0.9vmax",
                    color: " rgba(71, 70, 70, 0.737)",
                    textDecoration: "line-through",
                  }}
                >
                  (₹3,900)
                </span>
              </h6>
            </div>
          </div>
          <div className="course-card mt-5 ">
            <div className="course-image">
              <img src="https://images.unsplash.com/photo-1538439907460-1596cafd4eff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHl0aG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"></img>
            </div>
            <h6 className="course-name mt-2">
              Learn Python: The Complete Python Programming Course
            </h6>
            <h6 className="author">Avinash Jain, The Codex</h6>
            <div className="course-card-rating">
              <h6 className="d-flex align-items-center">
                <span style={{ color: "rgb(158, 118, 19)" }}>4.3</span>
                <ReactStars
                  className="ms-1"
                  count={5}
                  size={18}
                  value={3.5}
                  edit={false}
                ></ReactStars>
                <span
                  className="ms-1"
                  style={{
                    fontSize: "0.9vmax",
                    color: " rgba(71, 70, 70, 0.737)",
                  }}
                >
                  (3,900)
                </span>
              </h6>
              <h6 style={{ color: "black" }}>
                ₹289{" "}
                <span
                  className="ms-1"
                  style={{
                    fontSize: "0.9vmax",
                    color: " rgba(71, 70, 70, 0.737)",
                    textDecoration: "line-through",
                  }}
                >
                  (₹3,900)
                </span>
              </h6>
            </div>
          </div>
          <div className="course-card mt-5 ">
            <div className="course-image">
              <img src="https://images.unsplash.com/photo-1538439907460-1596cafd4eff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHl0aG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"></img>
            </div>
            <h6 className="course-name mt-2">
              Learn Python: The Complete Python Programming Course
            </h6>
            <h6 className="author">Avinash Jain, The Codex</h6>
            <div className="course-card-rating">
              <h6 className="d-flex align-items-center">
                <span style={{ color: "rgb(158, 118, 19)" }}>4.3</span>
                <ReactStars
                  className="ms-1"
                  count={5}
                  size={18}
                  value={3.5}
                  edit={false}
                ></ReactStars>
                <span
                  className="ms-1"
                  style={{
                    fontSize: "0.9vmax",
                    color: " rgba(71, 70, 70, 0.737)",
                  }}
                >
                  (3,900)
                </span>
              </h6>
              <h6 style={{ color: "black" }}>
                ₹289{" "}
                <span
                  className="ms-1"
                  style={{
                    fontSize: "0.9vmax",
                    color: " rgba(71, 70, 70, 0.737)",
                    textDecoration: "line-through",
                  }}
                >
                  (₹3,900)
                </span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesHomeContainer;
