import Navsm from "./Navsm";
import "../style/HeadTnp.css";
import Footer from "./utils/Footer";
import InvitationText from "./utils/IntvitationText";
import Email from '../images/email2.png';
import Phone from '../images/phone-call.png';

const Headtnp = () => {
  return (
    <>
      <Navsm />
      <div className="headTNP">
        <div className="headImg">
          <div className="imaGE"></div>
          <br />
          <h4 style={{'color':'#457B9D'}}>Prof. V K Dwivedi</h4>
          <h4>Professor, Training & Placement Cell</h4>
          <h4>MMMUT, Gorakhpur</h4>
          <br />
          <h4><img src={Email} alt="" /> tnp@mmmut.ac.in/ vkdtnp@mmmut.ac.in</h4>
          <br />
          <h4><img src={Phone} alt="" />+91 XXXX XXXX XX</h4>
          <br />
      
          <h4 style={{'color':'#457B9D'}}>Home</h4>
          <br />
          <h2 style={{ textDecoration: "underline" }}>INVITATION</h2>
          
        </div>
        <InvitationText/>
        <Footer/>
      </div>
    </>
  );
};

export default Headtnp;
