import Navsm from "./Navsm";
import StudentCoordinator from './StudentCoordinator';
import '../style/Student.css';
import SData from "../data/SData";

const Studentcoordinators = () => {
  return (
    <>
      <Navsm />
      <div className="about">Our Team</div>
      <div className="borderpromalumni"></div>

      <div>
        <div className="container">
          <div className="row">
            {SData.map(element => {
              return (
                <>
                  <StudentCoordinator key={element.id} data={element} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Studentcoordinators;
