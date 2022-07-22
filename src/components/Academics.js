import Navsm from "./Navbar/Navsm";
import "../style/academics.css";
import Footer from "./utils/Footer";

const Academics =()=>{
    return(
        <>
        <Navsm/>
         <div className="program">Programmes</div>
         <div className="borderrr1"></div>
         <div className="text1">The University offers various programmes at undergraduate, postgraduate and doctoral level.</div >
         <div className="ug">Undergraduate Programmes</div>
         <div className="borderrr2"></div>
         <div className="text2">
             <p>
             The University offers the following undergraduate programmes leading to B.Tech. and B.B.A. degrees, which are of 4 and 3 years duration, respectively.
              </p>
              <b>Bachelor of Technology (B.Tech.):</b>
         </div>
         <ul>
            <li><b>Duration:</b> 4 Years</li>
            <li><b>Admission Through:</b> JEE Mains</li>
            <li><b>Specialisations Offered:</b>
               <ul>
                 <li>Chemical Engineering (CHE)</li>
                 <li>Civil Engineering (CE)</li>
                 <li>Computer Science & Engineering (CSE)</li>
                 <li>Electrical Engineering (EE)</li>
                 <li>Electronics and Communication Engineering (ECE)</li>
                 <li>Information Technology (IT)</li>
                 <li>Mechanical Engineering (ME)</li>
               </ul>
            </li>
         </ul>
         <div className="text2">
              <b>Bachelor of Business Administration (B.B.A.):</b>
         </div>
         <ul>
            <li><b>Duration:</b> 3 Years</li>
            <li><b>Admission Through:</b> UPCET</li>
         </ul>

         <div className="text2">
              <b>Bachelor of Pharmacy (B.Pharma):</b>
         </div>
         <ul>
            <li><b>Duration:</b> 3 Years</li>
            <li><b>Admission Through:</b> UPCET</li>
         </ul>
         <div className="pg">Postgraduate Programmes</div>
         <div className="borderrr3"></div>
         <div className="text2">
             <p>
             The University offers the following undergraduate programmes leading to M.Tech., M.B.A., M.C.A. and M.Sc. degrees.
              </p>
              <b> Master of Technology (M.Tech.):</b>
         </div>
         <ul>
            <li><b>Duration:</b> 2 Years</li>
            <li><b>Admission Through:</b> GATE Examination</li>
            <li><b>Specialisations Offered:</b>
            </li>
         </ul>

         <div className="list1">
               <ul>
                 <li>Civil Engineering:
                  <ol>
                    <li>Structuring Engineering</li>
                    <li>Environmental Engineering</li>
                    <li>Seismic Design and Earthquake Engineering</li>
                    <li>Hill Area Development Engineering</li>
                  </ol>
                 </li>
                 <br></br>
                 <li>Electrical Engineering:
                  <ol>
                    <li>Power Electronics and Drives</li>
                    <li>Control and instrumentation</li>
                  </ol>
                 </li>
                 <br></br>
                 <li>Mechanical Engineering:
                  <ol>
                    <li>Energy Technology and Management</li>
                    <li>Computer Integrated Manufacturing</li>
                  </ol>
                 </li>
                 <br></br>
                 <li>Electronics & Communication Engineering:
                  <ol>
                    <li>Digital System</li>
                    <li>Communication Engineering</li>
                  </ol>
                 </li>
                 <br></br>
                 <li>Computer Science & Engineering:
                  <ol>
                    <li>Computer Science and Engineering</li>
                    <li>Information Technology</li>
                  </ol>
                 </li>
               </ul>
            </div>
         <div className="text2">
              <b>Master of Computer Application (M.C.A.):</b>
         </div>
         <ul>
            <li><b>Duration:</b> 2 Years</li>
            <li><b>Admission Through:</b> UPCET</li>
         </ul>
         <div className="text2">
              <b>Master of Business Administration (M.B.A.):</b>
         </div>
         <ul>
            <li><b>Duration:</b> 2 Years</li>
            <li><b>Admission Through:</b> UPCET</li>
            <li><b>Specialisations Offered:</b>
               <ul>
                 <li>Finance</li>
                 <li>Human Resource (HR)</li>
                 <li>Information Technology (IT)</li>
                 <li>Marketing
                 </li>
               </ul>
            </li>
         </ul>
         <div className="text2">
              <b>Marketing Master of Science (M.Sc.):</b>
         </div>
         <ul>
            <li><b>Duration:</b> 2 Years</li>
            <li><b>Admission Through:</b> UPCET</li>
            <li><b>Specialisations Offered:</b>
               <ul>
                 <li>Physics</li>
                 <li>Chemistry</li>
                 <li>Mathematics</li>
               </ul>
            </li>
         </ul>
         <div className="dp">Doctoral Programmes</div>
         <div className="borderrr4"></div>
         <div className="text1">The university offers doctoral programmes (full-time and part-time both) in various discipline.</div >
         
         <Footer />
        </>
    );

};

export default Academics;
