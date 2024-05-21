import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function ChapterNavPage () {

    return (
        <div className='chapter-nav-page'>
            <NavLink to={`/`} className="close-button">
                <IoCloseSharp />
            </NavLink>
            <h1>Table of Contents</h1>
            <div className="chapterList">
                <NavLink to={`/`}>
                    <h2>Chapter 1:<br></br> Preconception and Planning</h2>
                </NavLink>
                <NavLink to={`/`}>
                    <h2 className="even">Chapter 2:<br></br> Early Pregnancy</h2>
                </NavLink>
                <NavLink to={`/`}>
                    <h2>
                        Chapter 3:<br></br> Second Trimester
                    </h2>
                </NavLink>
                <NavLink to={`/`}>
                    <h2 className="even">Chapter 4:<br></br> Third Trimester</h2>
                </NavLink>
                <NavLink to={`/`}>
                    <h2>Chapter 5:<br></br> Postpartum Care</h2>
                </NavLink>
                <NavLink to={`/`}>
                    <h2 className="even">Chapter 6:<br></br> Nutrition and Wellness</h2>
                </NavLink>
            </div>
        </div>
    )
}

export default ChapterNavPage;