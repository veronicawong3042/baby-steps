import { NavLink } from "react-router-dom";

function CongratsPage () {

    return (
        <div className='congrats-page'>
            <h1>Congrats!</h1>
            <p>You've completed the lesson.</p>
            <NavLink to={`/`}>
                <a href="">Go back to home.</a>
            </NavLink>
        </div>
    )
}

export default CongratsPage;