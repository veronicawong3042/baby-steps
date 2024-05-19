import { PiNotebookFill } from "react-icons/pi";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

import LessonComponent from "../components/LessonComponent";
import { RiCheckLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

function HomePage() {
  return (
    <div className="homepage">
      <div className="chapter-banner">
        <h2>Chapter 1: Preconception & Planning</h2>
        <NavLink to={`/chapter-navigation`} className="change-chapter-btn">
          <PiNotebookFill />
        </NavLink>
      </div>

      {/* to be cloned/reused: */}
      <LessonComponent lessonTitle="Lesson 1 - Menstrual Cycle and Ovulation" />
      <LessonComponent lessonTitle="Lesson 2 - Fertility tracking methods" />
      <LessonComponent lessonTitle="Lesson 3 - Common fertility issues" />

      <NavLink to={`/glossary`} className="glossary-btn" >
        <HiOutlineInformationCircle />
      </NavLink>
    </div>
  );
}

export default HomePage;
