import React from "react";
import Navsm from "./Navsm";
import Facebook from '../images/Website/facebook.png';
import Email from '../images/Website/email.png';
import Globe from '../images/Website/globe.png';
import Linkedin from '../images/Website/linkedin footer.png';

const Invitation =()=>{
  
    return(
        <React.Fragment>
        <Navsm/>
        <div className="head1">
          <div className="head2">
            <span className="head-text-1">Madan Mohan Malaviya University of Technology, Gorakhpur – 273010 (U.P.) India </span> <br />
            <span className="head-text-1">(Formerly: Madan Mohan Malaviya Engineering College, Gorakhpur)</span> <br />
            <span className="head-text-1">[NIRF ACCREDITED, ranked-227]</span> <br /> <br /> 
            Telephone No.: 9953001761/8765783675 <br />
            E-mail: tnp@mmmut.ac.in
          </div>
        </div>
        <div className="invite-content"> 
            <div className="invite-text">
                <p>Dear Sir/Ma’am, </p>
                 <p>I feel immense pleasure in introducing Madan Mohan Malaviya University of Technology, Gorakhpur with the humble request to invite you on behalf of this University to our ‘Campus Recruitment Programme'. The Govt. of Uttar Pradesh established Madan Mohan Malaviya Engineering College in the year 1962 to impart professional education in the fields of Civil Engineering, Electrical Engineering, Mechanical Engineering, Electronics & Communication Engineering, Computer Science & Engineering leading to bachelor’s degree B.Tech. and subsequently reconstituted it as non-affiliating technological University of U.P. State Govt. through its act number 22 of 2013 with effect from 1st December 2013. The institution is presently functioning as Madan Mohan Malaviya University of Technology since December 1, 2013. </p>

                 <p> Presently department of Computer Science, Civil Engineering, Mechanical Engineering, and Electrical Engineering has been accredited by NBA. This University has been ranked 15th among top Engineering Institute/Universities (2019) by India Today, 6th in Engineering Institute/University in India in Times Engineering Institute 2018, 44th by HackerRank Community, and 16th in PG & Research (2018) by India Today Magazine. </p>

                 <p>This University has signed many MOUs with National and International Universities for collaborative research and development. The International Universities are The Clouds Laboratory, University of Melbourne, Australia, Central Michigan University Board of Trustees, Michigan, USA, North Dakota State University, USA, University of Wisconsin, Green Bay, USA, Warsaw Management University, Poland, Universidad Carlos III DE Madrid, Spain, Faculty of Engineering, University of Ryukyus, Japan and ENEA, Italy.</p>

                 <p> MMMUT is also part of the Technical Education Quality Improvement Program (TEQIP) of the Government of India assisted by the World Bank and also a center for the Ph.D. degree under the Quality Improvement Program (QIP) of the Government of India.</p>

                 <p>I feel great pleasure in informing that during previous years the companies like M/s Tata Consultancy Services (TCS), Wipro Technologies, HCL, Cognizant, Idea Cellular (P) Ltd., Vodafone, Indian Army, Adobe, Coforge Technologies, Amazon, Mahindra Comviva, Software AG, Snapdeal, DLT Labs, Jaro Group, Future Generali, Lava International Ltd, Ericsson Global, Nagarro, Juspay, Humming Wave, Prism Jhonson, Escorts, JK cement, Berger Paint have visited this University and recruited students from our campus.</p>

                 <p>It is also a matter of pride that our students have been consistently securing high scores in GATE/CAT/GRE/GMAT for admission to various Master’s Programs in reputed institutes in India and abroad and also in other national-level competitive examinations.</p>

                 <p>It is worthwhile to mention here that from 1966 till date more than 15,000+ engineers who had been excelling in various industries and acquired leadership and top executive positions including Fortune 500 organizations.</p>

                 <p>I shall be extremely thankful if you kindly accede to our request of interaction with our students for their placement/internship and developing a long-term relationship with this University. You can contact the undersigned for any of the information in this regard. University will feel immense pleasure in hosting you on the lush green campus of Madan Mohan Malaviya University of Technology, Gorakhpur.</p>

                 <p>In case of any queries, feel free to contact the undersigned at (9953001761/8765783675) or Dr. Brijesh Kumar, Vice Chairman (Placement) (Mobile No: 9235500552) or Dr. Rajan Mishra, Vice Chairman (Internship) and Coordinator, (Mobile No: 09235500560). Looking forward to your kind response. </p>

                    
                <span className="bld"><strong>Thanks & Regards,</strong> </span><br /> <span className="bld"><strong> Prof. V.K. Dwivedi Professor, <br /> T&P MMMUT, Gorakhpur</strong></span> 
            </div>
            <div className="btns">
            <div className="btn">
               <button className="downloadBrochure-button">
               <i className="fa fa-download" aria-hidden="true"> </i> 
                <span> &nbsp; <a href="#"><strong>Placement Brochure</strong></a></span>
                </button>
            </div>
            <div className="btn">
                <button className="mail-button"><a href="mailto:tnp@mmmut.ac.in"><strong>Mail To: tnp@mmmut.ac.in</strong></a></button>
            </div>
        </div>
        </div>
        <div className="copyrt">
          <div>©2022, Training & Placement Cell,  MMMUT, Gorakhpur</div>
          <div>
            <a href="https://www.facebook.com/TnP.MMMUT"> <img src={Facebook}  /></a>
            <a href="https://www.linkedin.com/in/tnpmmm/"> <img src={Linkedin}  /></a>
            <a href="mailto:tnp@mmmut.ac.in"> <img src={Email}  /></a>
            <a href="http://www.mmmut.ac.in/"> <img src={Globe}  /></a>
          </div>
        </div>
        </React.Fragment>
    );
};

export default Invitation;