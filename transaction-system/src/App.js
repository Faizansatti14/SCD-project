import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
//import Reviews from './PatientModule/Reviews';
//import PatientViewDoctor from './PatientModule/PatientViewDoctor';
//import DashboardP from './PatientModule/DashboardP';
//import RescheduleAppoitments from './DoctorsModule/RescheduleAppoitment';
//import ViewPMF from './DoctorsModule/ViewPMF';
//import DoctorViewAppoitments from './DoctorsModule/DoctorViewAppoitments';
import AdminSaveDoctor from './Components/AdminSaveDoctor';
//import Dashboard from './DoctorsModule/Dashboard';
import AddNewDoctor from './Components/AddNewDoctor';
//import AdminviewDoctor from './Components/AdminviewDoctor';
import Dashboard from './Components/Dashboard';
//import DashboardDoctor from './Components/DashboardDoctor';
//import Sidebar from './Components/Sidebar';
//import Navbar from './Components/Navbar';
//mport Login from './Components/Login';
//import Signup from './Components/Signup';
//import DashBoardD from "./DoctorsModule/DashboardD";

function App() {
  return (
    <>
    {/*<Login/> */}
    {/*<Signup/> */}
    {/*<Navbar/>*/}
    {/*<Sidebar/> */}
    {/*<Dashboard/> */}
    {/*<AddNewDoctor/> */}
    {/*<AdminviewDoctor/> */}
    {/*<AdminSaveDoctor/> */}
    {/*<DashboardDoctor/> */}
    {/*<DashBoardD/> */}
    {/*<DoctorViewAppoitments/> */}
    {/*<RescheduleAppoitments/> */}
    {/*<ViewPMF/> */}
    {/*<DashboardP/> */}
    {/*<PatientViewDoctor/> */}
    {/*<Reviews/> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/AddNewDoctor" element={<AddNewDoctor/>} /> 
      <Route path="/AdminSaveDoctor" element={<AdminSaveDoctor/>} /> 
    </Routes>
    </BrowserRouter>

    </>
    
  );
}

export default App;
