import React, { useState } from "react";
import LessonPopUp from "../components/LessonPopUp";
import { RiCheckLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

function LessonComponent({ lessonTitle }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleLessonClick = () => {
    setShowPopup(true);
    // Add event listener to close popup when clicking outside of it
    document.addEventListener("click", handleClickOutside);
  };

  const handleClickOutside = (event) => {
    const lessonComponent = document.querySelector(".lesson-component");
    // Close the popup if clicked outside of it
    if (lessonComponent && !lessonComponent.contains(event.target)) {
      setShowPopup(false);
      // Remove the event listener after closing the popup
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
