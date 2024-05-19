import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { GlobalProvider } from "../context/GlobalContext"; - Not needed but left here just in case
// ------------------------ //
import HomePage from "../pages/HomePage";
import GlossaryPage from "../pages/GlossaryPage";
import ChapterNavPage from "../pages/ChapterNavPage";
import EducationPage from "../pages/EducationPage";
import QuizPage from "../pages/QuizPage";
import CongratsPage from "../pages/CongratsPage";
// ------------------------ //
// Below are for testing purposes only, not included in final product
import QuestionsTestPage from "../pages/QuestionsTestPage";

function AppRouter() {
  return (
    <BrowserRouter basename="/">
      {/* <GlobalProvider> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/glossary" element={<GlossaryPage />} />
        <Route path="/chapter-navigation" element={<ChapterNavPage />} />

        {/* Below are the Lesson related pages */}
        <Route path="/education" element={<EducationPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/congrats" element={<CongratsPage />} />

        {/* Below are for testing purposes only, not included in final product */}
        <Route path="/questions-test-page" element={<QuestionsTestPage />} />
      </Routes>
      {/* </GlobalProvider> */}
    </BrowserRouter>
  );
}

export default AppRouter;
