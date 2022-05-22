import { NavLink } from "react-router-dom";

const Navbar = ()=>{
    return(
        <>
        <div className="navbar">
            <ul className="menu">
                <li><NavLink to ="/cellwebsite" className="navbarlink">Home</NavLink></li>
                <li>Why Recruit@MMMUT <i className="fa fa-caret-down"></i>

                <div className="dropdown_menu">
                    <ul>
                        <li><NavLink to="/cellwebsite/about" className="dropdownnavlink">About MMMUT</NavLink></li>
                        <li><NavLink to="/cellwebsite" className="dropdownnavlink">Life@MMMUT</NavLink></li>
                        <li><NavLink to="/cellwebsite/academics" className="dropdownnavlink">Academics</NavLink></li>
                        <li><NavLink to="/cellwebsite/graduates" className="dropdownnavlink">Graduating Students</NavLink></li>
                        <li><NavLink to="/cellwebsite" className="dropdownnavlink">Achievements</NavLink></li>
                        <li><NavLink to="/cellwebsite/recruiters" className="dropdownnavlink">Past Recruiting Organisations</NavLink></li>
                    </ul>
                </div>
                </li>
                <li>For Companies <i className="fa fa-caret-down"></i>
                    <div className="dropdown_menu">
                        <ul>
                        <li><NavLink to="/cellwebsite/invite" className="dropdownnavlink">Invitation</NavLink></li>
                        <li><NavLink to="/cellwebsite" className="dropdownnavlink">Placement Brochure</NavLink></li>
                        <li><NavLink to="/cellwebsite/procedure" className="dropdownnavlink">Placement Procedure</NavLink></li>
                        <li><NavLink to="/cellwebsite/reachingMMMUT" className="dropdownnavlink">Reaching MMMUT</NavLink></li>
                        <li><NavLink to="/cellwebsite" className="dropdownnavlink">Placement Statistics/Training</NavLink></li>
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
                <li><NavLink to ="/cellwebsite/faqs" className="navbarlink">FAQs</NavLink></li>
                <li>Contact Us <i className="fa fa-caret-down"></i>
                <div className="dropdown_menu navwidth1">
                        <ul>
                        <li className="navwidth"><NavLink to ="/cellwebsite/HeadTnP" className="dropdownnavlink">Head of T&P, MMMUT</NavLink></li>
                        <li className="navwidth"><NavLink to ="/cellwebsite/facultyCoordinators" className="dropdownnavlink">Faculty Coordinators</NavLink></li>
                        <li className="navwidth"><NavLink to ="/cellwebsite/studentCoordinators" className="dropdownnavlink">Students Coordinators</NavLink></li>
                        </ul>
                    </div>                </li>
                <a href="https://in.linkedin.com/in/tnpmmm" target="blank"><li><i className="fa fa-linkedin" aria-hidden="true"></i></li></a>
            </ul>
        </div>
        </>
    )
}

export default Navbar;