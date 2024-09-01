import "./App.css";
const courses = [
  {
    id: 1,
    title: "English Lecture",
    description: "language lessons with the most popular teachers",
    imageUrl: "/images/img1.jpg",
    rate: "4.5",
    tags: ["langauges"],
    start: "2021-08-01T20:46:30.615Z",
    status: "Completed",
  },
  {
    id: 2,
    title: "Design Strategy",
    description:
      "lesson on planning design concept and proper planning of work",
    imageUrl: "/images/img2.jpg",
    rate: "4",
    tags: ["UI/UX design", "web design"],
    start: "2023-07-01T20:46:30.615Z",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Business Lecture",
    description:
      "lectures on how to build your buisness safely without fare of new projects",
    imageUrl: "/images/img3.jpg",
    rate: "3.9",
    tags: ["Marketing", "Finance"],
    start: "2023-07-01T20:46:30.615Z",
    status: "Active",
  },
];

function App() {
  return (
    <div>
      <h1>My Courses (3)</h1>
      <div className="course-list">
        <div className="course-item">
          <div className="course-item__img">
            <img src={"/images/img1.jpg"} alt={"image-1"} />
          </div>
          <div className="course-item__detail">
            <div className="course-item__body">
              <div>
                <p className="title">React.js Course</p>
                <p className="desc">The ULtimate React and Redux Cource</p>
              </div>
              <span className="rate">4</span>
            </div>
            <div className="course-item__footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
