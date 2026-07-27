import React from "react";
import CourseDetails from "./CourseDetails";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import "./App.css";

function App() {

  const showCourse = true;
  const showBook = true;
  const showBlog = true;

  return (
    <div className="container">

      {showCourse && (
        <div className="column">
          <CourseDetails />
        </div>
      )}

      {showBook ? (
        <div className="column">
          <BookDetails />
        </div>
      ) : null}

      <div className="column">
        {showBlog && <BlogDetails />}
      </div>

    </div>
  );
}

export default App;