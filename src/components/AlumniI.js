import React from "react";
import { Link } from "react-router-dom";

const AlumniI=(props)=>{
    return(
        <>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://picsum.photos/130/130?image=1027"
                    alt=""
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">kkkvk</h3>
                  <h4 className="title">Web Developer</h4>
                </div>
                <ul className="social">
                  <li>
                    <Link
                      href="https://codepen.io/collection/XdWJOQ/"
                      className="fa fa-facebook"
                      aria-hidden="true"
                    ></Link>
                  </li>
                  <li>
                    <Link
                      href="https://codepen.io/collection/XdWJOQ/"
                      className="fa fa-twitter"
                      aria-hidden="true"
                    ></Link>
                  </li>
                  <li>
                    <Link
                      href="https://codepen.io/collection/XdWJOQ/"
                      className="fa fa-google-plus"
                      aria-hidden="true"
                    ></Link>
                  </li>
                  <li>
                    <Link
                      href="https://codepen.io/collection/XdWJOQ/"
                      className="fa fa-linkedin"
                      aria-hidden="true"
                    ></Link>
                  </li>
                </ul>
              </div>
            </div>
        </>
    )
}

export default AlumniI;