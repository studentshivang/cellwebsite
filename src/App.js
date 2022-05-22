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
        {/* <Route path="/cellwebsite"  element={<Homepage />} /> because app is opening at /cellwebsite */}
        <Route path="/"  element={<Homepage />} />
      
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics/>} />
        <Route path="/graduates" element={<Graduates />} />
        <Route path="/recruiters" element={<Recruiters />} />
        <Route path="/invite" element={<Invitation />} />
        <Route path="/procedure" element={<Procedure />} />
        <Route path="/reachingMMMUT" element={<Reachingmmmut />} />
        <Route path="/faqs" element={<Faqs/>} ></Route>
        <Route path="/HeadTnP" element={<Headtnp />} />
        <Route path="/facultyCoordinators" element={<Faculty />} />
        <Route path="/studentCoordinators" element={<Studentcoordinators />} />
        
  
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
