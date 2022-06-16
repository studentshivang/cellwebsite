import React from "react";
import Navsm from "./Navsm";
import Facebook from '../images/facebook.png';
import Email from '../images/email.png';
import Globe from '../images/globe.png';
import Linkedin from '../images/linkedin.png';
import step1 from '../images/step1.png';
import step2 from '../images/step2.png';
import step3 from '../images/step3.png';
import step4 from '../images/step4.png';
import step5 from '../images/step5.png';

const Procedure =()=>{
    return(
        <React.Fragment>
        <Navsm/>
        <div className="container-procedure">
            <div className="Heading-procedure">
                 Placement Procedure
                  <div></div>
            </div>
            <div className="procedures">
                 <div className="procedure">
                     <img src = {step1} /> <span>Interested recruiters mail us the JD at   <a href="mailto:tnp@mmmut.ac.in">tnp@mmmut.ac.in</a> (including CTC, Job Role, Eligible Streams and other relevant details)</span>
                 </div>
                 <div className="procedure">
                 <img src = {step2} /> <span>We share it among the eligible and interested candidates through Superset Platform/Notice & GForm.</span>
                 </div>
                 <div className="procedure">
                 <img src = {step3} /> <span>Within a few working days, we share the excel containing list of interested & eligible candidates to the recruiter.</span>
                 </div>
                 <div className="procedure">
                 <img src = {step4} /><span>Recruiter can inform about the dates required for process to us and we coordinate accordingly till the successful completion.</span>
                 </div>
                 <div className="procedure">
                 <img src = {step5} /> <span>The company rolls out the offer letter either to T&P or to the candidates, and we coordinate accordingly.</span>
                 </div>
            </div>
            <div className="button-text">
                 Interested in Recruitment?
            </div>
            <div className="button-procedure">
                 <button className="mail-procedure-button"><strong>Mail To:</strong> tnp@mmmut.ac.in</button>
            </div>
            <div className="footer-procedure">
                 <div className="footer-text-procedure">
                    ©2022, Training & Placement Cell,  MMMUT, Gorakhpur
                 </div>
                 <div className="footer-links-procedure">
                    <a href="https://www.facebook.com/TnP.MMMUT"> <img src={Facebook}  /></a>
                    <a href="https://www.linkedin.com/in/tnpmmm/"> <img src={Linkedin}  /></a>
                    <a href="mailto:tnp@mmmut.ac.in"> <img src={Email}  /></a>
                    <a href="http://www.mmmut.ac.in/"> <img src={Globe}  /></a> 
                 </div>
            </div>
        </div>
        </React.Fragment>
    );
};

export default Procedure;