import React from 'react';
import drneha from "../Images/Dr-neha.jpg";
import '../PatientModuleStyling/Reviews.css'
import star from "../Images/Star-logo.jpg";
import hospitallogo from "../Images/hospital-logo.jpg";


export default function Reviews() {
  return (
    <>
      <div className="container">
        <header>
          <div className="logo">
            <img src={hospitallogo} alt="Logo" />
          </div>
          <h1>Remote Health Monitoring System</h1>
          <div className="user-info">
            <p>Muhammad Imran</p>
            <img src="user.jpg" alt="UserImage" />
          </div>
        </header>
        <main>
          <div className="profile-card">
            <img src={drneha} alt="Dr. Afzal Khan" />
            <h2>Dr. Afzal Khan</h2>
            <p className="specialty">Pediatric</p>
            <div className="rating">
              <p>GIVE RATING</p>
              <div className="stars">
                <span>4.9/5</span>
                <div className="star-icons">
                  <img src={star} alt="Star" />
                  <img src={star} alt="Star" />
                  <img src={star} alt="Star" />
                  <img src={star} alt="Star" />
                  <img src={star} alt="Half Star" />
                </div>
                <div className="rating-count">
                  <button>5</button>
                  <button>4</button>
                  <button>3</button>
                  <button>2</button>
                  <button>1</button>
                </div>
              </div>
            </div>
          </div>
          <div className="feedback">
            <h3>Share your Experience</h3>
            <textarea placeholder="Write your feedback here..."></textarea>
            <button type="submit">Submit</button>
          </div>
        </main>
      </div>
    </>
  );
}