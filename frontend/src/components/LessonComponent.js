import React, { useState } from 'react';
import LessonPopUp from "../components/LessonPopUp";
import { FaStar } from "react-icons/fa";


function LessonComponent({ lessonTitle }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleLessonClick = () => {
    setShowPopup(true);
  };

  return (
    <div className='lesson-component' onClick={handleLessonClick}>
      <FaStar />
      {/* {lessonTitle} */}
      {showPopup && <LessonPopUp lessonTitle={lessonTitle} />}
    </div>
  );
}

export default LessonComponent;