import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../style/Homepage.css";
import "./utils/Footer";

// import Footer from './utils/Footer';
const Homepage = () => {
  return (
    <>
      <div className="homediv">
        <Navbar />
      </div>

      <div className="about_us">
        <h2 className="about_us_line">About Us</h2>
        <p>
          <span>Training & Placement Cell (T&P)</span> of the University
          centrally handles all aspects of campus placements/internship,
          training/worshops for the graduating students of all Departments. T&P
          is well equipped with excellent infrastructure to support each and
          every stage of the placement processes. T&P Student Coordinators
          assist in arranging Pre-Placement Talks, Written Tests, Group
          Discussions, and Interviews etc. are made as per the requirements of
          the Organizations conducting the drive.
        </p>
      </div>

      <div className="announcements">
        <h2>Announcements</h2>
        <p>Coming soon!</p>
      </div>

      <div className="quicklinks">
        <h2>Quick Links</h2>

        <img
          className="img1"
          src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1655536300/link_1_dxwycj.png"
          alt="Error loading image"
        />
        <div className="first_two">
          <h5>
            <img
              className="img2"
              src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1655536655/Fill-8_1_mqa0ub.png"
              alt="Error loading image"
            />
            Login to Superset
          </h5>

          <h5>
            <img
              className="img3"
              alt="Error loading image"
              src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1655536006/brochure_1_gl6ekz.png"
            />
            Brochures
            <div className="dropdown">
        <ul>
                        <li><a href="#"/>Placement Brochure 2021-2022</li>
                        <li><a href="#"/>Placement Brochure 2021-2022</li>
                        <li><a href="#"/>Placement Brochure 2021-2022</li>
                        <li><a href="#"/>Placement Brochure 2021-2022</li>
        </ul>
            </div>
          </h5>
        </div>
        <div className="last_two">
          <h5>
            {" "}
            <img
              className="img4"
              src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1655536006/communicate_1_o8akqp.png"
              alt="Error loading image"
            />{" "}
            Student Coordinators
          </h5>
          <h5>
            {" "}
            <img
              className="img5"
              src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1655536006/analytics_1_1_yusxhi.png"
              alt="Error loading image"
            />{" "}
            Placement Stats
          </h5>

        </div>

        {/* <div className='firsttwo'> 
      <Link to="/about"  style={{textDecoration:"none"}} className='class001'>Login to Superset</Link>
        <Link to="/about"  style={{textDecoration:"none"}} className='class001'>Brochures</Link>
       </div>
   <div className='lasttwo'>
   <Link to="/about"  style={{textDecoration:"none"}} className='class001'>Student Coordinators</Link>
        <Link to="/about" style={{textDecoration:"none"}}  className='class001'>Placement Stats</Link>

   </div> */}
      </div>

      <div className="Downloads">
        <h2>Downloads</h2>
        {/* <img src='https://res.cloudinary.com/dd6idpm2e/image/upload/v1655536006/analytics_1_yrbr7z.png' className='img1'/> */}
        <div className="first_two_01">

          <h5>
            {" "}
            <img
              src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1657597253/report_1_mlgglr.png"
              className="img2"
              alt="Error loading image"
            />{" "}
            Placement Reports
          </h5>
          <h5>
            {" "}
            <img
              src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1657597836/templates_1_xyrfpr.png"
              className="img3"
              alt="Error loading image "
            />{" "}
            Resume Template
          </h5>
        </div>
        <div className="last_two_01">
          <h5>
            {" "}
            <img
              src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1657648277/insurance_1_ufp80u.png "
              className="img4"
              alt="Error loading image "
            />{" "}
            Placement Policy
          </h5>
          <h5 id="invitation">
            {" "}
            <img
              src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1657648352/invitation_1_t0whud.png"
              className="img5"
              alt="Error loading image "
            />{" "}
            Invitation
          </h5>

        </div>
      </div>

      <div className=""></div>

      <div className="heading_vice_desk" id="heading_vice_desk_01">
        <h2>From the Vice-Chancellor’s Desk</h2>
      </div>

      <div className="vice_desk" id="vice_desk_01">
        {/* <div className="text_vice_desk">  */}
        <p>
          Madan Mohan Malviya University of Technology (MMMUT), <br /> Gorakhpur
          has grown to become the national flagship of UP <br /> State
          Government, known for the excellence of it's teaching to <br /> the
          national and international communities. MMMUT has <br /> been
          strategically created (established in 2013) on the legacy <br /> of
          success presented by Madan Mohan Malviya Engineering <br /> College
          Gorakhpur (established in 1962 by Government of UP) <br /> towards
          providing cutting edge learning technology, <br /> internationally
          benchmarked education and critical research <br /> opportunities in
          frontier areas of contemporary concern. The <br /> confidence posed by
          the industries for our institute is <br /> indicated by the fact that
          maximum students are placed and <br /> are serving in various leading
          global industries
        </p>
        {/* </div> */}
        <div>
          <div className="image_vice_desk"></div>
          <div className="image_vice_desk_text">
            <h4>Prof. J.P. Pandey</h4>
            <h6>Vice-Chancellor</h6>
            <h6>MMMUT, Gorakhpur</h6>
          </div>
        </div>
      </div>

      <div className="heading_tpo_desk" id="heading_tpo_desk_01">
        <h2>From the TPO’s Desk</h2>
      </div>

      <div className="vice_desk" id="vice_desk_01">
        {/* <div className="text_vice_desk">  */}
        <p>
          Madan Mohan Malviya University of Technology, Gorakhpur is <br /> one
          of the established university of India. It's always an <br />{" "}
          endeavour for entire academic fraternity to raise the <br /> placement
          year on year by imparting essential technical and <br /> non-technical
          techniques to students due to which they <br /> become competent to
          face the industry challenges. I am also <br /> proud to say that MMMUT
          has faced the challenges <br /> successfully. This is possible due to
          outstanding efforts of the <br /> faculty and of the bright students
          who are selected after a <br /> stringent process. Our alumni have
          achieved tremendous <br /> success in all sphere and this bears an
          eloquent testimony to <br /> our efforts.
        </p>
        {/* </div> */}
        <div>
          <div className="image_tpo_desk"></div>
          <div className="image_tpo_text">
            <h4>Prof. J.P. Pandey</h4>
            <h6>Vice-Chancellor</h6>
            <h6>MMMUT, Gorakhpur</h6>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="text-area">
          <h5>©2022, Training & Placement Cell, MMMUT, Gorakhpur</h5>
        </div>
        <div className="footer_images">
          <img
            src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1655502070/cell_website/facebook_objqnq.png"
            alt="Error loading iage"
          />
          <img
            src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1655502070/cell_website/linkedin_wboyqx.png"
            alt="Error loading iage"
          />
          <img
            src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1655502070/cell_website/email_buxtqz.png"
            alt="Error loading iage"
          />
          <img
            src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1655502070/cell_website/globe_r355qa.png"
            alt="Error loading iage"
          />
        </div>
      </div>


      {/* <div className="tpo_desk">

  <div className="tpo_text">
    <h2>From the Vice-Chancellor’s Desk</h2>
    <p>Madan Mohan Malviya University of Technology (MMMUT), Gorakhpur has grown to become the national flagship of UP State Government, known for the excellence of it's teaching to the national and international communities. MMMUT has been strategically created (established in 2013) on the legacy of success presented by Madan Mohan Malviya Engineering College Gorakhpur (established in 1962 by Government of UP) towards providing cutting edge learning technology, internationally benchmarked education and critical research opportunities in frontier areas of contemporary concern. The confidence posed by the industries for our institute is indicated by the fact that maximum students are placed and are serving in various leading global industries.</p>
  </div>
  <div className="tpo_image"></div>
  </div> */}
    </>
  );
};

export default Homepage;

/* Prof. J.P. Pandey Vice-Chancellor MMMUT, Gorakhpur */
