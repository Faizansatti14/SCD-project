import React from 'react'
import Drneha from "../Images/Dr-neha.jpg";
import '../PatientModuleStyling/DashboardP.css'

export default function DashboardP() {
  return (
   <>
        <div class="header">
        <img src="logo.png" alt="Logo" width="50"/>
        <h1>Remote Health Monitoring System</h1>
    </div>
    <div class="profile-container">
        <div class="profile-card">
            <img src={Drneha} alt="Dr. Yough Ghazim"/>
            <h3>Dr. Yough Ghazim</h3>
            <p>Mohs Surgeon</p>
            <div class="status online">
                <span>Online</span>
            </div>
            <a href="#" class="view-profile">View Profile</a>
        </div>
        <div class="profile-card">
            <img src={Drneha} alt="Dr. Imran Shahzaib"/>
            <h3>Dr. Imran Shahzaib</h3>
            <p>Cosmetic Dermatologist</p>
            <div class="status offline">
                <span>Offline</span>
            </div>
            <a href="#" class="view-profile">View Profile</a>
        </div>
        <div class="profile-card">
            <img src={Drneha} alt="Dr. Afzal Khan"/>
            <h3>Dr. Afzal Khan</h3>
            <p>Pediatric</p>
            <div class="status online">
                <span>Online</span>
            </div>
            <a href="#" class="view-profile">View Profile</a>
        </div>
    </div>
   </>
  )
}
