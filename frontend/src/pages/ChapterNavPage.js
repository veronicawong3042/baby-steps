import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function ChapterNavPage () {

    return (
        <div className='chapter-nav-page'>
            <NavLink to={`/`} className="close-button">
                <IoCloseSharp />
            </NavLink>
            <h1>Table of Contents</h1>
            <NavLink to={`/`}>
                <h2>Chapter 1: Preconception and Planning</h2>
            </NavLink>
            <NavLink to={`/`}>
                <h2>Chapter 2: Early Pregnancy</h2>
            </NavLink>
            <NavLink to={`/`}>
                <h2>
                    Chapter 3: Second Trimester
                </h2>
            </NavLink>
            <NavLink to={`/`}>
                <h2>Chapter 4: Third Trimester</h2>
            </NavLink>
            <NavLink to={`/`}>
                <h2>Chapter 5: Postpartum Care</h2>
            </NavLink>
            <NavLink to={`/`}>
                <h2>Chapter 6: Nutrition and Wellness</h2>
            </NavLink>
        </div>
    )
}

export default ChapterNavPage;