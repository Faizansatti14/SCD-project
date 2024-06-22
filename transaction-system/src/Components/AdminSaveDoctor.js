import React from 'react'
import  DrNeha from '../Images/Dr-neha.jpg';
import '../Styling/AdminSaveDoctor.css'

const SaveDoctorProfile =()=>{
    window.alert('Profile updated successfully');

};

export default function AdminSaveDoctor() {
  return (
    <div class="container">
        <div class="profile">
            <img src={DrNeha} alt="DoctorImage"/>
            <p>Email: Neha.ghazim@domain.com</p>
            <p>Phone Number: +92310-1111111</p>
            <p>Date Of Birth: 13-05-1991</p>
        </div>
        <div class="details">
            <h2>Dr. Neha Ghazim</h2>
            <h3>Medical Dermatology</h3>
            <p>Discription</p>
            <p>Dr. Neha Ghazim is a skilled dermatologist who is deeply dedicated to his profession. With a wealth of knowledge and experience in the field of dermatology, Dr. Ghazim specializes in diagnosing and treating various skin conditions. He is adept at handling common skin ailments such as acne, eczema, psoriasis, dermatitis, and infections. Dr. Ghazim believes in taking a holistic approach to dermatology, addressing the physical and emotional well-being of his patients. He is an advocate for patient education and consistently imparts advice on skincare, diet, and lifestyle to provide comprehensive care that addresses both the medical and emotional aspects of his patients' concerns.</p>
            <div class="buttons">
                <button class="create" onClick={SaveDoctorProfile}>Save</button>
            </div>
        </div>
        <div class="right-column">
            <p>CNIC: 13503-1222-7</p>
            <p>Type: Skin surgeon</p>
            <p>Gender: Male</p>
            <p>Qualification: MCPS, MRCP</p>
            <p>Experience: 8 years</p>
            
        </div>
    </div>
  )
}
