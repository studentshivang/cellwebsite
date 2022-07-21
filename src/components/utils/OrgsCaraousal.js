//Past Recruiting Organisations Caraousel
import React from "react";
import "./OrgsCaraousal.css";
import testimo from "./Testimonial.png";
import Footer from "./Footer";
<<<<<<< HEAD


const OrgsCaraousal = () => {
 
 
=======
import Logos from "../LogoComponent/Logos";

const OrgsCaraousal = () => {
>>>>>>> b4886e347a0fe3026f2177c758b8e1a7f8a80819
  return (
    <>
      <div className="testimonials">
        <h2>Testimonials From Past Recruiters</h2>
        <div className="underline-head"></div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={testimo}
                className="d-block w-100"
                alt="caraousel item"
              />
            </div>
            <div className="carousel-item">
              <img
                src={testimo}
                className="d-block w-100"
                alt="caraousel item"
              />
            </div>
            <div className="carousel-item">
              <img
                src={testimo}
                className="d-block w-100"
                alt="caraousel item"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="testimonials">
          <h2>Past Recruiters</h2>
          <div className="underline-head2"></div>
        </div>
<<<<<<< HEAD
       
=======
        <div>
          <div className="inner-crousel">
            <Logos />
          </div>
        </div>
>>>>>>> b4886e347a0fe3026f2177c758b8e1a7f8a80819
      </div>
      
     
      <div className="btns-invitation">
        <div className="btn-invitation">
          <button className="downloadBrochure-button">
            <i className="fa fa-download" aria-hidden="true">
              {" "}
            </i>
            <span>
              {" "}
              &nbsp;{" "}
              <a
                href="https://drive.google.com/file/d/1H2UVnWmQmS-wATsCzgiXyqNX31WDKqw1/view?usp=drivesdk"
                target="_"
              >
                <strong>Placement Brochure</strong>
              </a>
            </span>
          </button>
        </div>
        <div className="btn-invitation">
          <button className="mail-button">
            <a href="mailto:tnp@mmmut.ac.in">
              <strong>Mail To: tnp@mmmut.ac.in</strong>
            </a>
          </button>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default OrgsCaraousal;
