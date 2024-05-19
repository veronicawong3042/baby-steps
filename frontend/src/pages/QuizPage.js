import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function QuizPage() {
  return (
    <div className="quiz-page">
      This is the quiz navigation page in lessons. Connected to the lesson
      component.
      <NavLink to={`/`} className="close-button">
        <IoCloseSharp />
      </NavLink>
    </div>
  );
}

export default QuizPage;
