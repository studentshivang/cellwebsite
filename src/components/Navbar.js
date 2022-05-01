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
                <li>For Companies <i className="fa fa-caret-down"></i></li>
                <li>Student Utilities <i className="fa fa-caret-down"></i></li>
                <li>FAQs</li>
                <li>Contact Us <i className="fa fa-caret-down"></i></li>
                <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
            </ul>
        </div>
        </>
    )
}

export default Navbar;