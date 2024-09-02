import React from "react";

function CourseCard(props) {
  console.log(props.course.tags.map((item) => item));
  return (
    <div className="course-item" key={props.course.id}>
      <div className="course-item__img">
        <img src={"/images/img1.jpg"} alt={"image-1"} />
      </div>
      <div className="course-item__detail">
        <div className="course-item__body">
          <div>
            <p className="title">{props.course.title}</p>
            <p className="desc">{props.course.description}</p>
          </div>
          <span className="rate">{props.course.rate}</span>
        </div>
        <div className="course-item__footer">
          <div className="tags">
            {props.course.tags.map((tag) => (
              <span className="badge badge--secondary">{tag}</span>
            ))}
          </div>
          <div className="caption">
            <div className="date">
              {new Date(props.course.start).toLocaleDateString("fa-IR", {
                month: "short",
                year: "numeric",
                day: "numeric",
              })}
            </div>
            <span className="badge badge--primary">{props.course.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
