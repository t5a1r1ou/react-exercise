import React from "react";

import { Part } from "./Part";

export const Course = ({ course }) => {
  const parts = () =>
    course.parts.map((part, i) => {
      return <Part name={part.name} exercises={part.exercises} key={i} />;
    });

  const exercisesArray = course.parts.map(part => part.exercises);

  const sumExercises = () =>
    exercisesArray.reduce((a, b) => {
      return a + b;
    });

  return (
    <div>
      <h1>{course.name}</h1>
      {parts()}
      <p>total of {sumExercises()} exercises</p>
    </div>
  );
};
