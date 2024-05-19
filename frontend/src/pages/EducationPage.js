import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

function EducationPage() {
  return (
    <div className="education-page">
      <div className="education-content">
        <h2>Lesson 1: Menstrual Cycle and Ovulation</h2>
        <NavLink to={`/`} className="close-button">
          <IoCloseSharp />
        </NavLink>
        <div className="learningObjective">
          <p>Learning Objective</p>
        </div>
        <p>
          To provide a clear understanding of the menstrual cycle and ovulation.
        </p>
        <p>
          <strong>Timing of Ovulation:</strong>
        </p>
        <ul>
          <li>
            Typically occurs around day 14 of a 28-day cycle, but can vary.
          </li>
          <li>The fertile window is 5 days before ovulation to 1 day after.</li>
        </ul>
        <p>
          <strong>Tracking Ovulation:</strong>
        </p>
        <ul>
          <li>
            Methods include basal body temperature charting, ovulation predictor
            kits, and monitoring cervical mucus changes.
          </li>
          <li>Knowing these signs helps time intercourse for conception.</li>
        </ul>

        <div className="next-page-btn">
          <p>
            <em>There will be a quiz next page</em>
          </p>
          <NavLink to={`/quiz`}>
            <FaArrowRight />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default EducationPage;
