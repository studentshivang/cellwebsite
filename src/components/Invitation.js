import React from "react";
import Navsm from "./Navsm";
import Footer from "./utils/Footer";
import { motion, useScroll } from "framer-motion";
import Logos from "./LogoComponent/Logos";
import InvitationText from "./utils/IntvitationText";

const Invitation = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Navsm />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <div>
        <div className="head1">
          <div className="head2">
            <span className="head-text-1">
              Madan Mohan Malaviya University of Technology, Gorakhpur – 273010
              (U.P.) India{" "}
            </span>{" "}
            <br />
            <span className="head-text-1">
              (Formerly: Madan Mohan Malaviya Engineering College, Gorakhpur)
            </span>{" "}
            <br />
            <span className="head-text-1">
              [NAAC 'A' Grade University]
            </span>{" "}
            <br />
            Telephone No.: <a href="tel:+919953001761">9953001761/</a>
            <a href="tel:+918765783675 ">8765783675 </a>
            <br />
            E-mail: <a href="mailto:tnp@mmmut.ac.in">tnp@mmmut.ac.in</a>
          </div>
        </div>
        <InvitationText />
      </div>

      <Footer />
    </>
  );
};

export default Invitation;
