import Navsm from "./Navsm";
import Fdata from "../data/Fdata";
import FacultyIndividual from "./FacultyIndividual";

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
    </>
  );
};

export default Faculty;
