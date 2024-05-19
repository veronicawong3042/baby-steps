// import {useQuestions} from '../hooks/useQuestions'
// import QuizPage from './QuizPage'


// function QuestionsTestPage() {

//     const rows = useQuestions()

//     class Question {
//         constructor(text, correctAnswer, allAnswers) {
//           this.text = text;
//           this.correctAnswer = correctAnswer;
//           this.allAnswers = allAnswers;
//           this.correctlyAnswered = false;
//         }
//     };

//     function markCorrect(question) {
//         question.correctlyAnswered = true;
//     }
    
//     function markIncorrect(question) {
//         question.correctlyAnswered = false;
//     }

//     let currentTitle = rows[0].question;
//     let currentAnswers = [rows[0].other1, rows[0].other2, rows[0].other3, rows[0].answer];

//     //let q1 = new Question(rows[0].question, rows[0].answer, [rows[0].other1, rows[0].other2, rows[0].other3, rows[0].answer], false);
//     //let q2 = new Question(rows[1].question, rows[1].answer, [rows[1].answer, rows[1].other1, rows[1].other2, rows[0].other3], false);

//     //let questionsList = [q1, q2];
    
//     function getIncorrectQuestion(questions) {
//       for (const question of questions) {
//         if (!question.correctlyAnswered) {
//           return question;
//         }
//       }
//       return null; // Return null if all questions were answered correctly
//     }
    

//     return(
//         <QuizPage
//             title={currentTitle}
//             allAnswers={currentAnswers}
//         >
//         </QuizPage>
//     )
// }

// export default QuestionsTestPage;