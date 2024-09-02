import React from "react";

function CourseCard(props) {
  return (
    <div className="course-item">
      <div className="course-item__img">
        <img src={"/images/img1.jpg"} alt={"image-1"} />
      </div>
      <div className="course-item__detail">
        <CourseCardBody
          title={props.course.title}
          description={props.course.description}
          rate={props.course.rate}
        />
        <CourseCardFooter
          tags={props.course.tags}
          status={props.course.status}
          start={props.course.start}
        />
      </div>
    </div>
  );
}

export default CourseCard;

const CourseCardBody = ({ title, description, rate }) => {
  return (
    <div className="course-item__body">
      <div>
        <p className="title">{title}</p>
        <p className="desc">{description}</p>
      </div>
      <span className="rate">*git {rate}</span>
    </div>
  );
};

const CourseCardFooter = ({ tags, start, status }) => {
  const startedAt = new Date(start).toLocaleDateString("fa-IR", {
    month: "short",
    year: "numeric",
    day: "numeric",
  });
  return (
    <div className="course-item__footer">
      <div className="tags">
        {tags.map((tag, index) => (
          <span className="badge badge--secondary" key={index}>
            {tag}
          </span>
        ))}
      </div>
      <div className="caption">
        <div className="date">{startedAt}</div>
        <span
          className={`bage ${
            status == "Active"
              ? "badge--primary"
              : status == "Upcoming"
              ? "badge--danger"
              : "badge--secondary"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};
