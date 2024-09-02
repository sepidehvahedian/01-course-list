const courseStatus = ["All", "Active", "Completed", "Upcoming"];
import React, { useState } from "react";
import CourseList from "./CourseList";

function Header({ courses }) {
  const [statusTab, setStatusTab] = useState("");
  const clickHandler = (s) => {
    console.log(s);
    setStatusTab(s);
  };
  console.log(
    courses.map((item) => item).filter((result) => result.status == statusTab)
  );

  return (
    <div>
      <h1>My Courses (3)</h1>
      <div className="course-status">
        {courseStatus.map((s) => (
          <div className="active" key={s} onClick={() => clickHandler(s)}>
            {s}
          </div>
        ))}
      </div>
      {statusTab == "All" ? (
        <CourseList courses={courses} />
      ) : (
        <CourseList
          courses={courses
            .map((item) => item)
            .filter((result) => result.status == statusTab)}
        />
      )}
    </div>
  );
}

export default Header;
