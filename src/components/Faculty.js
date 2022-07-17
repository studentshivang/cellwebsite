import Navsm from "./Navsm";
import Fdata from "../data/Fdata";
import FacultyIndividual from "./FacultyIndividual";
import Footer from './utils/Footer';

const Faculty = () => {
  return (
    <>
      <Navsm />
      <div className="about">Faculty Coordinators</div>
      <div className="borderpromalumni"></div>
      <div className="container">
        <div className="row">
        {Fdata.map((data, index) => {
          return <FacultyIndividual key={data.id} data={data} />;
        })}
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default Faculty;
