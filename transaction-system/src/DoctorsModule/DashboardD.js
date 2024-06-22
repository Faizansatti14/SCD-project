import React from 'react'
import '../DoctorsModuleStyling/DashboardD.css';
import Drneha from "../Images/Dr-neha.jpg";
import hospitallogo from "../Images/hospital-logo.jpg";
export default function DashboardD() {
  return (
  
   <>   <body>
            <div class="navbar">
                <div class="logo">
                    <img src={hospitallogo} alt="Logo" style={{width: '50px', height: '50px',borderRadius:'50%'}}/>
                    <span>Remote Health Monitoring System</span>
                </div>
                
                <div class="user-info">
                    <img src={Drneha} alt="ProfilePicture"/>
                    <div>
                        <span>Dr.Neha</span>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="sidebar">
                    <button>Dashboard</button>
                    <button>View Profile</button>
                    <button>Appointments</button>
                    <button>EMR</button>
                    <button>Feedbacks</button>
                </div>
                <div class="main-content">
                    <div class="notice-board">
                        <h2>Notice Board</h2>
                        <textarea id="description" name="description" rows="9" coloumns ="9" maxength="250"></textarea>
                    </div>
                </div>
            </div>
        </body>   
  </>
  
  )
}
