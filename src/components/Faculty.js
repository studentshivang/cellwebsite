import Navsm from "./Navbar/Navsm";
import Facultyindividual from "./FacultyIndividual";
import "../style/Student.css";
import FData from "../data/Fdata";
import Footer from "./utils/Footer";

const Faculty = () => {
  return (
    <>
      <Navsm />
      <div className="student">
        <div className="about ms-4 ms-lg-5" id="Fac_title">
          Faculty Coordinators
        </div>
        <div className="borderpromalumni ms-4 ms-lg-5" id="fac_title"></div>

        <div>
          <div className="container">
            <div className="row">
              {FData.map((element) => {
                return (
                  <>
                    <Facultyindividual key={element.id} data={element} />
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

export default Faculty;
