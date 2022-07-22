import React from "react";
import "../style/Faculty.css";

const FacultyIndividual = (props) => {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 mx-auto">
        <div id="our-team">
          <div className="picture">
            <img
              className="img-fluid img-thumbnail"
              src={props.data.image}
              alt=""
            />
          </div>
          <div className="team-content">
            <h5 className="name">
              <b>{props.data.name}</b>
            </h5>
            <h4 className="title">{props.data.post},</h4>
            <h4 className="title">Training & Placement Cell</h4>
            <h4 className="title display-3">{props.data.designation},</h4>
            <h4 className="title display-3">{props.data.department}</h4>
            {/* <h4>MMMUT Gorakhpur</h4> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FacultyIndividual;
