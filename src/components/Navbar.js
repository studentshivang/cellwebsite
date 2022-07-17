import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ()=>{

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return(
        <>
        <div className="navbar">
        <button className="hamburger" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
            {isNavExpanded?<i className="fa fa-times" ></i>:<i className="fa fa-bars" ></i>}
        </button>
            <ul className={
          isNavExpanded ? "menu expanded" : "menu"
        }>
                <li><NavLink to ="/" className="navbarlink">Home</NavLink></li>
                <li>Why Recruit@MMMUT <i className="fa fa-caret-down"></i>

                <div className="dropdown_menu">
                    <ul>
                        <li><NavLink to="/about" className="dropdownnavlink">About MMMUT</NavLink></li>
                        <li><NavLink to="/" className="dropdownnavlink">Life@MMMUT</NavLink></li>
                        <li><NavLink to="/academics" className="dropdownnavlink">Academics</NavLink></li>
                        <li><NavLink to="/graduates" className="dropdownnavlink">Graduating Students</NavLink></li>
                        <li><NavLink to="/" className="dropdownnavlink">Achievements</NavLink></li>
                        <li><NavLink to="/alumni" className="dropdownnavlink">Alumni</NavLink></li>
                        <li><NavLink to="/recruiters" className="dropdownnavlink" id="pastrecruit">Past Recruiting Organisations</NavLink></li>
                    </ul>
                </div>
                </li>
                <li>For Companies <i className="fa fa-caret-down"></i>
                    <div className="dropdown_menu">
                        <ul>
                        <li><NavLink to="/invite" className="dropdownnavlink">Invitation</NavLink></li>
                        <li><NavLink to="/" className="dropdownnavlink">Placement Brochure</NavLink></li>
                        <li><NavLink to="/procedure" className="dropdownnavlink">Placement Procedure</NavLink></li>
                        <li><NavLink to="/reachingMMMUT" className="dropdownnavlink">Reaching MMMUT</NavLink></li>
                        <li><NavLink to="/" className="dropdownnavlink">Placement Statistics/Training</NavLink></li>
                        </ul>
                    </div>
                </li>
                <li>Student Utilities <i className="fa fa-caret-down"></i>
                <div className="dropdown_menu navwidth1">
                        <ul>
                        <li className="navwidth">Placement Policy</li>
                        <li className="navwidth">Login to Superset</li>
                        <li className="navwidth">Resume Template</li>
                        </ul>
                    </div>
                </li>
                <li><NavLink to ="/faqs" className="navbarlink">FAQs</NavLink></li>
                <li>Contact Us <i className="fa fa-caret-down"></i>
                <div className="dropdown_menu navwidth1">
                        <ul>
                        <li className="navwidth"><NavLink to ="/HeadTnP" className="dropdownnavlink">Head of T&P, MMMUT</NavLink></li>
                        <li className="navwidth"><NavLink to ="/facultyCoordinators" className="dropdownnavlink">Faculty Coordinators</NavLink></li>
                        <li className="navwidth"><NavLink to ="/studentCoordinators" className="dropdownnavlink">Students Coordinators</NavLink></li>
                        </ul>
                    </div>                </li>
                <a href="https://in.linkedin.com/in/tnpmmm" target="blank"><li><i className="fa fa-linkedin" aria-hidden="true"></i></li></a>
            </ul>
        </div>
        </>
    )
}

export default Navbar;