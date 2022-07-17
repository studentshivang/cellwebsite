import Navsm from "./Navsm";
import List from "./utils/List";
import OrgsCaraousal from "./utils/OrgsCaraousal";


const Recruiters =()=>{
    return(
        <>
        <Navsm/>
        <div className="about">Past Recruiters</div>
      <div className="borderpromalumni"></div>
        <List/>{/*Please Code in "./utils/List" Shivang */}
        <OrgsCaraousal/>{/*Please Code in "./utils/OrgsCaraousal" Vaishanvi */}
        </>
    );
};

export default Recruiters;