import React, { useState } from 'react';
import LessonPopUp from "../components/LessonPopUp";


function LessonComponent({ lessonTitle }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleLessonClick = () => {
    setShowPopup(true);
  };

  return (
    <div className='lesson-component' onClick={handleLessonClick}>
      <h3>{lessonTitle}</h3>
      {showPopup && <LessonPopUp lessonTitle={lessonTitle} />}
    </div>
  );
}

export default LessonComponent;