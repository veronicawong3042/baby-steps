import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

function QuizPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setShowErrorMessage(selectedValue !== "3"); // Show error message if not the correct answer
  };

  return (
    <div className="quiz-page">
      <div className="question-header">
        <NavLink to={`/`} className="close-button">
          <IoCloseSharp />
        </NavLink>
        <h2>Question 1 of 3</h2>
      </div>
      <div className="quiz-content">
        <blockquote>The fertile window is ________ before ovulation?</blockquote>
        <div className="options-container">
          <div className="option">
            <input
              type="radio"
              id="option-1"
              name="quiz"
              value="1"
              onChange={handleOptionChange}
              style={{ display: "none" }}
            />
            <label htmlFor="option-1" className="option-label">
              4 days
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="option-2"
              name="quiz"
              value="2"
              onChange={handleOptionChange}
              style={{ display: "none" }}
            />
            <label htmlFor="option-2" className="option-label">
              6 days
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="option-3"
              name="quiz"
              value="3"
              onChange={handleOptionChange}
              style={{ display: "none" }}
            />
            <label htmlFor="option-3" className="option-label">
              5 days
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="option-4"
              name="quiz"
              value="4"
              onChange={handleOptionChange}
              style={{ display: "none" }}
            />
            <label htmlFor="option-4" className="option-label">
              1 week
            </label>
          </div>
        </div>
      </div>

      {selectedOption === "3" && (
        <div className="next-page-btn correct-message">
          <p><em>Well Done!</em></p>
          <NavLink to={`/`}>
            <FaArrowRight />
          </NavLink>
        </div>
      )}

      {showErrorMessage && (
        <div className="error-message">
          <p><em>Wrong answer, please try again.</em></p>
        </div>
      )}
    </div>
  );
}

export default QuizPage;
