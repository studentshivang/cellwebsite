import { Routes,Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Academics from "./components/Academics";
import Errorpage from "./components/Errorpage";
import Faculty from "./components/Faculty";
import Faqs from "./components/Faqs";
import Graduates from './components/Graduates';
import Headtnp from './components/Headtnp';
import Invitation from './components/Invitation';
import Procedure from './components/Procedure';
import Reachingmmmut from './components/Reachingmmmut';
import Recruiters from './components/Recruiters';
import Studentcoordinators from './components/Studentcoordinators';
// import Navbar from "./components/Navbar";


const Routing =()=>{
  return(
    <>
    <Routes>
        <Route path="/cellwebsite"  element={<Homepage />} /> {/* because app is opening at /cellwebsite */}
        {/* <Route path="/"  element={<Homepage />} /> */}
      
        <Route path="/cellwebsite/about" element={<About />} />
        <Route path="/cellwebsite/academics" element={<Academics/>} />
        <Route path="/cellwebsite/graduates" element={<Graduates />} />
        <Route path="/cellwebsite/recruiters" element={<Recruiters />} />
        <Route path="/cellwebsite/invite" element={<Invitation />} />
        <Route path="/cellwebsite/procedure" element={<Procedure />} />
        <Route path="/cellwebsite/reachingMMMUT" element={<Reachingmmmut />} />
        <Route path="/cellwebsite/faqs" element={<Faqs/>} ></Route>
        <Route path="/cellwebsite/HeadTnP" element={<Headtnp />} />
        <Route path="/cellwebsite/facultyCoordinators" element={<Faculty />} />
        <Route path="/cellwebsite/studentCoordinators" element={<Studentcoordinators />} />
        
  
        <Route path="*" element={<Errorpage />} />

      </Routes>
    </>
  );
}


function App() {
  return (
   <>
    {/* <Homepage/>
    <Navbar/> */}
    <Routing/>
   </>
  );
}

export default App;
