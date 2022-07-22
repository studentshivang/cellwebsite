import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage";
import About from "./components/About/About";
import Academics from "./components/Academics";
import ErrorPage from "./components/utils/errorPage";
import Faculty from "./components/Faculty";
import Faqs from "./components/Faqs";
import GraduatingStudent from "./components/GraduatingStudents/GraduatingStudents";
import HeadTNP from "./components/HeadTNP/headTNP";
import Invitation from "./components/Invitation/Invitation";
import Procedure from "./components/Procedure/Procedure";
import Reachingmmmut from "./components/Reachingmmmut";
import Recruiters from "./components/Past Recruiters/Recruiters";
import Alumni from "./components/Alumni/Alumni";
import PlacementTraining from "./components/Placement & Training/Placement_Training";
import Achievements from "./components/Achievements/Achievements";
import LifeAtMMMUT from "./components/Life@MMMUT/Life";
import StudentCoordinators from "./components/Student Coordinator/StudentCoordinators";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/graduates" element={<GraduatingStudent />} />
        <Route path="/recruiters" element={<Recruiters />} />
        <Route path="/invite" element={<Invitation />} />
        <Route path="/procedure" element={<Procedure />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/reachingMMMUT" element={<Reachingmmmut />} />
        <Route path="/placement_training" element={<PlacementTraining />} />
        <Route path="/faqs" element={<Faqs />}></Route>
        <Route path="/HeadTnP" element={<HeadTNP />} />
        <Route path="/facultyCoordinators" element={<Faculty />} />
        <Route path="/studentCoordinators" element={<StudentCoordinators />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/lifeatmmmut" element={<LifeAtMMMUT />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <>
      {/* <Homepage/>
    <Navbar/> */}
      <Routing />
    </>
  );
}

export default App;
