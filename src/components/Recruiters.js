import Navsm from "./Navsm";
import List from "./utils/List";
import OrgsCaraousal from "./utils/OrgsCaraousal";
import '../style/Recruiters.css';
const Recruiters =()=>{
    return(
        <>
        <Navsm/>
        <div className="about ms-4 ms-lg-5 PastROHeading">Past Recruiting Organisations</div>
      <div className="borderpromalumni ms-4 ms-lg-5 PastROUnderline"></div>
        <List/>{/*Please Code in "./utils/List" Shivang */}
        <OrgsCaraousal/>{/*Please Code in "./utils/OrgsCaraousal" Vaishanvi */}
        </>
    );
};

export default Recruiters;