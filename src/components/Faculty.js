import Navsm from "./Navsm";
import Fdata from "../data/Fdata";
import FacultyIndividual from "./FacultyIndividual";
import Footer from "./utils/Footer";
import { motion, useScroll } from "framer-motion";

const Faculty = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Navsm />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <div className="f">
        <div className="about">Faculty Coordinators</div>
        <div className="borderpromalumni"></div>
        <div className="container">
          <div className="row ">
            {Fdata.map((data, index) => {
              return <FacultyIndividual key={data.id} data={data} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faculty;
