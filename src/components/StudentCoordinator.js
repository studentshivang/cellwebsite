import React from "react";
// import "../style/alumni.css";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

const StudentCoordinator = (data) => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 mx-auto">
        <div id="our-team">
          <div className="picture">
            <img className="img-fluid" src={data.data.image} alt="Alumnus" />
          </div>
          <div className="team-content">
            <h3 className="name">{data.data.post}</h3>
            <h4 className="title">{data.data.name}</h4>
            <h4 className="title">
              {data.data.branch}, {data.data.year} Year
            </h4>
          </div>
          <ul className="social">
            <li>
              <a
                href="tel:+91{data.data.phone}"
                className="fa fa-phone"
                aria-hidden="true"
              ></a>
            </li>

            <li>
              <Link
                to={data.data.in}
                className="fa fa-linkedin"
                aria-hidden="true"
              ></Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default StudentCoordinator;
