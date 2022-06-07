import Navsm from "./Navsm";
import Fdata from '../data/Fdata';
import FIndividual from "./FIndividual";

const Faculty =()=>{
    return(
        <>
        <Navsm/>
        <h2>Faculty Coordinators</h2>

        <div className="coordinators">
        {Fdata.map((data,index)=>{
            return(
                <FIndividual 
                    key={data.id} 
                    data={data}/>
            )
        })}
        </div>
        </>
    );
};

export default Faculty;