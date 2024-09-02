import CourseCard from "./CourseCard";

const CourseList = ({ courses }) => {
  return (
    <div className="course-list">
      {courses.map((course, index) => {
        return <CourseCard course={course} key={course.id} />;
      })}
    </div>
  );
};

export default CourseList;
