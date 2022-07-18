import React from "react";
import Navbar from "./Navbar";
import Footer from "./utils/Footer";
import "../style/Life.css";
import EDB from "../images/EDB.png";
import IICHE from "../images/IICHE.png";
import RC from "../images/RC.png";

const Lifeatmmmut = () => {
    return (
             <>
             <div className="pages_life">
        {/* <div className="layer_nav">
        </div> */}

           

          <Navbar />
      </div>
            <div className="contents">
             <div className="content1">
                <div className="head1">
                Student Activities
                <div className="underline"> </div>
                </div>
                <br />
                <p>The students of MMMUT are brilliant in extracurricular, sports and leadership roles, in addition to a strenuous academic schedule.
 Students show intense time-management, intrapersonal, interpersonal as well as managerial and leadership skills as they take up versatile roles, such as managing the student body, organizing festivals, competing in prestigious national and international competitions and taking up social initiatives through various societies & cells.</p>
             </div>
             <div className="content1">
                <div className="head1">
                IEEE STUDENT BRANCH
                <div className="underline"> </div>
                </div>
                <br />
               <div className="society">
                <div >
                    <img className="s-img" src={EDB} alt="Society Logo"></img>
                </div>
                <div className="s-about">
                The Institute of Electrical and Electronics Engineers is the world's largest technical professional organization. It's student branch IEEE SB MMMUT conducts numerous technical workshops, personality development workshops, free UXD skill development classes, and of course the annual Tech-Fest of our college, 'TECHSRIJAN'.

                </div>
               </div>
             </div>
             
             <div className="content1">
                <div className="head1">
                SAE COLLEGIATE CLUB
                <div className="underline"> </div>
                </div>
                <br />
               <div className="society">
                <div >
                    <img className="s-img" src={EDB} alt="Society Logo"></img>
                </div>
                <div className="s-about">
                Society of Automotive Engineers MMMUT Chapter is the student branch of SAE India. It is dedicated to the cause of science and technology in the automotive field as well as the ventures to promote extensive engineering and fabrication of various innovative solutions for the automotive industry.

                </div>
               </div>
             </div>
             <div className="content1">
                <div className="head1">
                CULTUAL SYNOD
                <div className="underline"> </div>
                </div>
                <br />
               <div className="society">
                <div >
                    <img className="s-img" src={EDB} alt="Society Logo"></img>
                </div>
                <div className="s-about">
                Cultural Synod is the cultural society of MMMUT which conducts all cultural events of our College. The annual cultural fest named "Abhyudaya" is conducted by Cultural Synod in accordance with The Editorial Board.

                </div>
               </div>
             </div>
             <div className="content1">
                <div className="head1">
                THE EDITORIAL BOARD
                <div className="underline"> </div>
                </div>
                <br />
               <div className="society">
                <div >
                    <img className="s-img" src={EDB} alt="Society Logo"></img>
                </div>
                <div className="s-about">
                The Editorial Board is the official publishing body of the University and literary Sub-Council and it is also one of the earliest established boards of the University. It primarily focuses on conducting literary events and and strives throughout the year to conduct events that helps in grooming one’s skills at literary level.
                </div>
               </div>
             </div>
             <div className="content1">
                <div className="head1">
                ROBOTICS CLUB
                <div className="underline"> </div>
                </div>
                <br />
               <div className="society">
                <div >
                    <img className="s-img" src={RC} alt="Society Logo"></img>
                </div>
                <div className="s-about">
                Robotics Club provides an opportunity for students to supplement their education with hands-on experience in integration engineering. For the past 12 years robotics club engage its students with active participation in various workshops, contests and tutorials to develop their interest in Robotics.

                </div>
               </div>
             </div>
             <div className="content1">
                <div className="head1">
                IICHE STUDENT BRANCH
                <div className="underline"> </div>
                </div>
                <br />
               <div className="society">
                <div >
                    <img className="s-img" src={IICHE} alt="Society Logo"></img>
                </div>
                <div className="s-about">
                Armed with vision plus boundless energy and gaining credibility by the day , giant strides were made and the young society grew rapidly in quality and recognition. IIChE, MMMUT started its momentous journey with a handful of extremely dedicated students under the guidance of its eminent professors.

                </div>
               </div>
             </div>
            </div>
             <Footer />
             </>
        );
    };
    
    export default Lifeatmmmut;