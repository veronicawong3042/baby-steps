import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { GlobalProvider } from "../context/GlobalContext";
// ------------------------ //
import HomePage from "../pages/HomePage";
import GlossaryPage from "../pages/GlossaryPage";
import QuestionsTestPage from "../pages/QuestionsTestPage";

function AppRouter() {
    return (
      <BrowserRouter basename="/">
        {/* <GlobalProvider> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/glossary-page" element={<GlossaryPage />} />
            <Route path="/questions-test-page" element={<QuestionsTestPage />} />
          </Routes>
        {/* </GlobalProvider> */}
      </BrowserRouter>
    );
  }
  
  export default AppRouter;
  