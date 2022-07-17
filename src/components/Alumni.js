import React from "react";
import "../style/alumni.css";
import Navsm from "./Navsm";
import AlumnData from "../data/Alumndata";
import Alumnus from "./Alumnus";

const Alumni = () => {
  return (
    <>
      <Navsm />
      <div className="about">Prominent Alumni</div>
      <div className="borderpromalumni"></div>

      <div>
        <div className="container">
          <div className="row">
            {AlumnData.map(element => {
              return (
                <>
                  <Alumnus key={element.id} data={element} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Alumni;
