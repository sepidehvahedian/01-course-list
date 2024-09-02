const courseStatus = ["All", "Active", "Completed", "Upcoming"];
import React from "react";

function Header() {
  return (
    <div>
      <h1>My Courses (3)</h1>
      <div className="course-status">
        {courseStatus.map((s) => (
          <div className="active" key={s}>
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
