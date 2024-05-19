import { NavLink } from "react-router-dom";

function CongratsPage() {
  return (
    <div className="congrats-page">
      <h1>Congrats!</h1>
      <blockquote>You've completed the lesson.</blockquote>
      <div className="next-page-btn">
        <NavLink to={`/`}>
          Back to Home
        </NavLink>
      </div>
    </div>
  );
}

export default CongratsPage;
