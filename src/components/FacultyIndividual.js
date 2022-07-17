import React from "react";
import "../style/Faculty.css"

const FacultyIndividual=(props)=>{
    return(
        <>
              <div className="col-12 col-sm-6 col-md-4 col-lg-4">

        <div className="f_object">
        <div className="f_image">
            <img src={props.data.image} alt="" />
        </div>
        <div>
            <h5>{props.data.name}</h5>
            <h4>{props.data.post},</h4>
            <h4>Training & Placement Cell</h4>
            <h4>MMMUT Gorakhpur</h4>
        </div>
        </div>
        </div>
        </>
    )
}

export default FacultyIndividual;