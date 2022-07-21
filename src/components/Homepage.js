import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./utils/Footer";
import Footer from "./utils/Footer";
import "../style/HomePg.css";
import TPO from "./utils/Home/TPO";
import VCsir from "./utils/Home/VCsir";
import QuickLinks from "./utils/Home/QuikLinks";
import About from "./utils/Home/About";

const Homepage = () => {
  return (
    <>
      <div className="homediv">
        <Navbar />
      </div>
      <div className="container homeContainer">
        <h2 className="about ms-2 ms-md-5 mt-5">About Us</h2>
        <div className="row col-12">
          <About />
        </div>
        <h2 className="about ms-2 ms-md-5">Announcements</h2>
        <div className="row col-12">
          <div className="border1 ms-4 ms-md-5" id="aboutAnn"></div>
          <p className="ms-2 ms-md-5 homePg">Coming soon!</p>
        </div>
        <QuickLinks />
        <VCsir />
        <TPO />
      </div>
      <Footer />
    </>
  );
};

export default Homepage;

/* Prof. J.P. Pandey Vice-Chancellor MMMUT, Gorakhpur */
