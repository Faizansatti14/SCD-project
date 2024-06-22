import React from 'react'
import '../Styling/Navbar.css';
import DrNeha from '../Images/Dr-neha.jpg';
import Hospitallogo from '../Images/hospital-logo.jpg'

export default function Navbar() {
  return (
 <div className="navbar">
        <div className="logo-container">
            <img src={Hospitallogo} alt="Logo"/>
            <div className="logo-text">Remote Health Monetoring System</div>
            <div className="logo-text1">Admin Access Only</div>
        </div>
        <div className="picture-container">
            <img src={DrNeha} alt="profile"/>
            <div className="picture-text">Dr.Neha</div>
        </div>
    </div>
  )
}
