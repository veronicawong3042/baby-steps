import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import {useQuestions} from '../hooks/useQuestions'

function QuizPage(props) {
  let title = props.title;
  const questions = useQuestions();

  const questionsLoaded = !!questions.length;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const currentQuestionText = currentQuestion?.question;
  const currentQuestionAnswer = currentQuestion?.answer;
  const allAnswers = [currentQuestion?.answer, currentQuestion?.other1, currentQuestion?.other2, currentQuestion?.other3].filter(Boolean);
  const [selectedOption, setSelectedOption] = useState(null);
  const isCorrectAnswerSelected = selectedOption ===  `${allAnswers.indexOf(currentQuestionAnswer) + 1}`

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <div className="quiz-page">
      <div className="question-header">
        <NavLink to={`/`} className="close-button">
          <IoCloseSharp />
        </NavLink>
        <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
      </div>
      <div className="quiz-content">
        <blockquote>{currentQuestionText}</blockquote>
        <div className="options-container">
          {
            allAnswers.map((answer, index) => <div key={answer} className="option">
            <input
              type="radio"
              id={"option-" + index + 1}
              name="quiz"
              value={index + 1}
              onChange={handleOptionChange}
              style={{ display: "none" }}
            />
            <label htmlFor={"option-" + index + 1} className="option-label">
              {answer}
            </label>
          </div>)
          }
        </div>
      </div>

      {isCorrectAnswerSelected && (
        <div className="next-page-btn correct-message">
          <p><em>Well Done!</em></p>
          <NavLink to={`/congrats`}>
            <FaArrowRight />
          </NavLink>
        </div>
      )}

      {!isCorrectAnswerSelected && (
        <div className="error-message">
          <p><em>Wrong answer, please try again.</em></p>
        </div>
      )}
    </div>
  );
}

export default QuizPage;
