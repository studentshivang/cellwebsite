import Navsm from "../Navbar/Navsm";
import StudentCoordinator from "./StudentCoordinator";
import "../../style/Student.css";
import SData from "../../data/SData";
import Footer from "../utils/Footer";

const StudentCoordinators = () => {
  return (
    <>
      <Navsm />
      <div className="student">
        <div className="about" id="Stud_title">
          Our Team
        </div>
        <div className="borderpromalumni" id="stud_title"></div>

        <div>
          <div className="container">
            <div className="row">
              {SData.map((element) => {
                return (
                  <>
                    <StudentCoordinator key={element.id} data={element} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentCoordinators;
