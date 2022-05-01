const Navbar = ()=>{
    return(
        <>
        <div className="navbar">
            <ul className="menu">
                <li>Home</li>
                <li>Why Recruit@MMMUT <i className="fa fa-caret-down"></i>

                <div className="dropdown_menu">
                    <ul>
                        <li>About MMMUT</li>
                        <li>Life@MMMUT</li>
                        <li>Academics</li>
                        <li>Graduating Students</li>
                        <li>Achievements</li>
                        <li>Past Recruiting Organisations</li>
                    </ul>
                </div>
                </li>
                <li>For Companies <i className="fa fa-caret-down"></i>
                    <div className="dropdown_menu">
                        <ul>
                        <li>Invitation</li>
                        <li>Placement Brochure</li>
                        <li>Placement Procedure</li>
                        <li>Reaching MMMUT</li>
                        <li>Placement Statistics/Training</li>
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
                <li>FAQs</li>
                <li>Contact Us <i className="fa fa-caret-down"></i>
                <div className="dropdown_menu navwidth1">
                        <ul>
                        <li className="navwidth">Head of T&P, MMMUT</li>
                        <li className="navwidth">Faculty Coordinators</li>
                        <li className="navwidth">Students Coordinators</li>
                        </ul>
                    </div>                </li>
                <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
            </ul>
        </div>
        </>
    )
}

export default Navbar;