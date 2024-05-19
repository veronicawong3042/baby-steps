import React from 'react';
import { NavLink } from 'react-router-dom';

function LessonPopUp({ lessonTitle }) {
  return (
    <div className='lesson-popup'>
      <p>{lessonTitle} Lesson Popup</p>
      <NavLink to={`/education`}>
        Start Lesson
      </NavLink>
    </div>
  );
}

export default LessonPopUp;