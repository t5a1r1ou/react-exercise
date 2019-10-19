import React from "react";
import { render } from "react-dom";

import { Courses } from "./components/Courses";

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10
        },
        {
          name: "Using props to pass data",
          exercises: 7
        },
        {
          name: "State of a component",
          exercises: 14
        }
      ]
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  return (
    <div>
      <Courses courses={courses} />
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
