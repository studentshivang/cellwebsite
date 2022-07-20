import React from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const QuickLinks = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    } else {
      animation.start({
        x: "-100vw",
      });
    }
  }, [inView]);

  return (
    <>
      <div ref={ref}>
        <motion.div animate={animation}>
          {/* QuickLinks */}
          <div className="row">
            <div className="quicklinks">
              <h2 className="text-center mt-2">
                {" "}
                <img
                  className="img1"
                  src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1655536300/link_1_dxwycj.png"
                  alt="Error loading "
                />{" "}
                Quick Links
              </h2>
              <div className="rowQLbig col-12 col-md-12">
                <div className="rowQL my-4 col-12 col-md-6">
                  <h4>
                    {" "}
                    <img
                      className="img2"
                      src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1655536655/Fill-8_1_mqa0ub.png"
                      alt="Error loading "
                    />{" "}
                    Login to Superset
                  </h4>
                  <h4>
                    {" "}
                    <img
                      className="img4"
                      src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1655536006/communicate_1_o8akqp.png"
                      alt="Error loading "
                    />{" "}
                    Student Coordinators
                  </h4>
                </div>
                <div className="rowQL my-4 col-12 col-md-6">
                  <div className="HomeDropdn1">
                    <h4>
                      {" "}
                      <img
                        className="img3"
                        alt="Error loading "
                        src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1655536006/brochure_1_gl6ekz.png"
                      />{" "}
                      Brochures
                    </h4>
                    <div className="hid1">
                      <ul>
                        <li>
                          <Link to="#">Placement Brochure 2021-2022</Link>
                        </li>
                        <li>
                          <Link to="#">Placement Brochure 2021-2022</Link>
                        </li>
                        <li>
                          <Link to="#">Placement Brochure 2021-2022</Link>
                        </li>
                        <li>
                          <Link to="#">Placement Brochure 2021-2022</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h4>
                    {" "}
                    <img
                      className="img5"
                      src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1655536006/analytics_1_1_yusxhi.png"
                      alt="Error loading "
                    />{" "}
                    Placement Stats
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="quicklinks">
              <h2 className="text-center mt-2">
                {" "}
                <img
                  src="https://res.cloudinary.com/dltqjc99w/image/upload/v1658265845/cell/download_1_hs3qzf.png"
                  className="img4"
                  alt="Error loading  "
                />{" "}
                Downloads
              </h2>
              <div className="rowQLbig col-12 col-md-12">
                <div className="rowQL my-4 col-12 col-md-6">
                  <div className="HomeDropdn1">
                    <h4>
                      {" "}
                      <img
                        src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1657597253/report_1_mlgglr.png"
                        className="img2"
                        alt="Error loading "
                      />{" "}
                      Placement Reports
                    </h4>
                    <div className="hid1">
                      <ul>
                        <li>
                          <Link to="#">Placement Report 2021-2022</Link>
                        </li>
                        <li>
                          <Link to="#">Placement Report 2021-2022</Link>
                        </li>
                        <li>
                          <Link to="#">Placement Report 2021-2022</Link>
                        </li>
                        <li>
                          <Link to="#">Placement Report 2021-2022</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h4>
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1657648277/insurance_1_ufp80u.png "
                      className="img4"
                      alt="Error loading  "
                    />{" "}
                    Placement Policy
                  </h4>
                </div>
                <div className="rowQL my-4 col-12 col-md-6">
                  <h4>
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1657597836/templates_1_xyrfpr.png"
                      className="img3"
                      alt="Error loading  "
                    />{" "}
                    Resume Template
                  </h4>
                  <h4>
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1657648352/invitation_1_t0whud.png"
                      className="img5"
                      alt="Error loading  "
                    />{" "}
                    Invitation
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default QuickLinks;
