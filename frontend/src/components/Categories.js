import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <h4>Featured topics by category</h4>
      <div className="d-flex justify-content-between">
        <div className="category-list">
          <h5>Development</h5>
          <div className="topic">
            <Link>
              <h6 className="topic-name">Python</h6>
            </Link>
            <h6 className="students">36,354,994 students</h6>
          </div>
          <div className="topic">
            <Link>
              <h6 className="topic-name">Web Development</h6>
            </Link>
            <h6 className="students">11,415,615 students</h6>
          </div>
          <div className="topic">
            <Link>
              <h6 className="topic-name">Machine Learning</h6>
            </Link>
            <h6 className="students">7,070,015 students</h6>
          </div>
        </div>
        <div className="category-list">
          <h5>Development</h5>
          <div className="topic">
            <Link>
              <h6 className="topic-name">Python</h6>
            </Link>
            <h6 className="students">36,354,994 students</h6>
          </div>
          <div className="topic">
            <Link>
              <h6 className="topic-name">Web Development</h6>
            </Link>
            <h6 className="students">11,415,615 students</h6>
          </div>
          <div className="topic">
            <Link>
              <h6 className="topic-name">Machine Learning</h6>
            </Link>
            <h6 className="students">7,070,015 students</h6>
          </div>
        </div>
        <div className="category-list">
          <h5>Development</h5>
          <div className="topic">
            <Link>
              <h6 className="topic-name">Python</h6>
            </Link>
            <h6 className="students">36,354,994 students</h6>
          </div>
          <div className="topic">
            <Link>
              <h6 className="topic-name">Web Development</h6>
            </Link>
            <h6 className="students">11,415,615 students</h6>
          </div>
          <div className="topic">
            <Link>
              <h6 className="topic-name">Machine Learning</h6>
            </Link>
            <h6 className="students">7,070,015 students</h6>
          </div>
        </div>
        <div className="category-list">
          <h5>Development</h5>
          <div className="topic">
            <Link>
              <h6 className="topic-name">Python</h6>
            </Link>
            <h6 className="students">36,354,994 students</h6>
          </div>
          <div className="topic">
            <Link>
              <h6 className="topic-name">Web Development</h6>
            </Link>
            <h6 className="students">11,415,615 students</h6>
          </div>
          <div className="topic">
            <Link>
              <h6 className="topic-name">Machine Learning</h6>
            </Link>
            <h6 className="students">7,070,015 students</h6>
          </div>
        </div>
      </div>
      <button className="d-flex align-items-center">
        <h6>Explore more topics</h6>
      </button>
    </div>
  );
};

export default Categories;
