import React from 'react'
import '../PatientModuleStyling/PatientViewDoctor.css';
import Drneha from '../Images/Dr-neha.jpg'

export default function PatientViewDoctor() {
  return (
    <>
          <div class="profile-container">
        <div class="profile-header">
            <img src={Drneha} alt="Dr. Ayoub Ghazim" class="profile-image"/>
            <div class="profile-info">
                <h1>Dr. Neha Ghazim</h1>
                <h2>Medical Dermatologist</h2>
                <p>Dr. Neha Ghazim is a skilled dermatologist who is deeply dedicated to his profession. With a wealth of knowledge and experience in the field of dermatology, Dr. Ghazim specializes in diagnosing and treating various skin conditions. He is adept at identifying and addressing common skin issues such as acne, eczema, psoriasis, and skin cancer. Dr. Ghazim believes in taking a comprehensive and personalized approach, considering the physical and emotional well-being of his patients. He understands that skin conditions can have a significant impact on a person's quality of life and strives to provide care that addresses both the medical and emotional aspects of his patients' concerns.</p>
            </div>
        </div>
        <div class="profile-details">
            <p><strong>Specialist:</strong> Skin Surgeon</p>
            <p><strong>Female</strong></p>
            <p><strong>Qualification:</strong> MCPS, MRCP</p>
            <p><strong>Experience:</strong> 8 years</p>
            <p><strong>Contact:</strong> ayoub.ghazim@domain.com</p>
        </div>
        <div class="availability">
            <h3>Available Slots</h3>
            <table>
                <tr>
                    <th>Days</th>
                    <th>From</th>
                    <th>To</th>
                </tr>
                <tr>
                    <td>Monday</td>
                    <td>9:00 AM</td>
                    <td>4:00 PM</td>
                </tr>
                <tr>
                    <td>Tuesday</td>
                    <td>9:00 AM</td>
                    <td>4:00 PM</td>
                </tr>
                <tr>
                    <td>Wednesday</td>
                    <td>9:00 AM</td>
                    <td>4:00 PM</td>
                </tr>
                <tr>
                    <td>Thursday</td>
                    <td>9:00 AM</td>
                    <td>4:00 PM</td>
                </tr>
                <tr>
                    <td>Friday</td>
                    <td>9:00 AM</td>
                    <td>4:00 PM</td>
                </tr>
                <tr>
                    <td>Saturday</td>
                    <td>Unavailable</td>
                    <td>Unavailable</td>
                </tr>
                <tr>
                    <td>Sunday</td>
                    <td>Unavailable</td>
                    <td>Unavailable</td>
                </tr>
            </table>
        </div>
        <div class="schedule-appointment">
            <button>Schedule Appointment</button><br/><br/>
            <button>Review Doctor</button>
        </div>
    </div>
    </>
  )
}
