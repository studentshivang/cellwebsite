import React from "react";

const FIndividual=(props)=>{
    return(
        <>
        <div className="f_object">
        <div className="f_image">
            <img src={props.data.image} alt="" />
        </div>
        <div>
            <h3>{props.data.name}</h3>
            <h4>{props.data.post},</h4>
            <h4>Training & Placement Cell</h4>
            <h4>MMMUT Gorakhpur</h4>
        </div>
        </div>
        </>
    )
}

export default FIndividual;