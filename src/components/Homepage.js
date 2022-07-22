import Navbar from "./Navbar/Navbar";
import "./utils/Footer";
import Footer from "./utils/Footer";
import "../style/homePage.css";
import TPO from "./utils/Home/TPO";
import VCsir from "./utils/Home/VCsir";
import QuickLinks from "./utils/Home/quickLink";
import { motion, useScroll } from "framer-motion";
import AboutText from "./utils/Home/AboutText";

const Homepage = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div className="homediv">
        <Navbar />
      </div>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <div className="container homeContainer">
        <h2 className="about ms-2 ms-md-5 mt-5">About Us</h2>
        <div className="border1 ms-4 ms-md-5" id="aboutBor"></div>
        <div className="row col-12">
          <AboutText />
        </div>

        <h2 className="about ms-2 ms-md-5">Announcements</h2>
        <div className="border1 ms-4 ms-md-5" id="aboutAnn"></div>

        <div className="row col-12">
          <p className="ms-2 ms-md-5 homePg">Coming soon!</p>
        </div>
        <QuickLinks />

        <div className="about ms-2 ms-md-5">
          From the Vice-Chancellor’s Desk
        </div>
        <div className="border1 ms-4 ms-md-5" id="aboutVCM"></div>
        <VCsir />

        <div className="about ms-2 ms-md-5">From the TPO’s Desk</div>
        <div className="border1 ms-2 ms-md-5" id="aboutTPOM"></div>
        <TPO />
      </div>
      <Footer />
    </>
  );
};

export default Homepage;

/* Prof. J.P. Pandey Vice-Chancellor MMMUT, Gorakhpur */
