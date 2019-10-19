import React from "react";

import { Course } from "./Course";

export const Courses = ({ courses }) => {
  const items = () =>
    courses.map(course => {
      return <Course course={course} />;
    });
  return <div>{items()}</div>;
};
