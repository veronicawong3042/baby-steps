import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function QuizPage() {
  return (
    <div className="quiz-page">
      <div className="question-header">
        <NavLink to={`/`} className="close-button">
          <IoCloseSharp />
        </NavLink>
        <h2>Question 1</h2>
      </div>
      <div className="quiz-content">
        {/* Blockquote is the question */}
        <blockquote>Why are we doing this hackathon?</blockquote>

        <div className="options-container">
          <div className="option">
            <input type="radio" id="option-1"></input>
            <label for="option-1">Answer 1</label>
          </div>
          <div className="option">
            <input type="radio" id="option-2"></input>
            <label for="option-2">Answer 2</label>
          </div>
          <div className="option">
            <input type="radio" id="option-3"></input>
            <label for="option-3">Answer 3</label>
          </div>
          <div className="option">
            <input type="radio" id="option-4"></input>
            <label for="option-4">Answer 4</label>
          </div>
        </div>
      </div>

      {/* Next Question Button ONLY SHOWS AFTER AN ANSWER HAS BEEN GIVEN */}
      <button>Next Question</button>
    </div>
  );
}

export default QuizPage;
