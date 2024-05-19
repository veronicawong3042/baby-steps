import React, { useState } from "react";
import LessonPopUp from "../components/LessonPopUp";
import { RiCheckLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

function LessonComponent({ lessonTitle }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleLessonClick = () => {
    setShowPopup(true);
    document.addEventListener("click", handleClickOutside);
  };

  const handleClickOutside = (event) => {
    const lessonComponent = document.querySelector(".lesson-component");
    if (lessonComponent && !lessonComponent.contains(event.target)) {
      setShowPopup(false);
      document.removeEventListener("click", handleClickOutside);
    }
  };

  return (
    <div className="lesson-component" onClick={handleLessonClick}>
      <div className="icon-outer-circle">
        <div className="icon-inner-circle">
          <FaStar />
        </div>
      </div>
      {showPopup && <LessonPopUp lessonTitle={lessonTitle} />}
    </div>
  );
}

export default LessonComponent;
