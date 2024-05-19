import { PiNotebookFill } from "react-icons/pi";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import LessonComponent from "../components/LessonComponent";
import LessonPopUp from "../components/LessonPopUp";

function HomePage() {
  return (
    <div className="homepage">
      <div className="chapter-banner">
        <h2>Chapter 1: Preconception & Planning</h2>
        <button className="change-chapter-btn">
          <PiNotebookFill />
        </button>
      </div>

      {/* to be cloned/reused: */}
      <LessonComponent lessonTitle="Lesson 1" />
      <LessonComponent lessonTitle="Lesson 2" />
      <LessonComponent lessonTitle="Lesson 3" />

      <button className="glossary-btn">
        <HiOutlineInformationCircle />
      </button>
    </div>
  );
}

export default HomePage;
