import React from 'react'
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';
import '../Styling/DashbordDoctor.css'

export default function DashboardDoctor() {
  return (
    <>
      <Navbar/>
      <Sidebar/>
     
     <table className="doctor-table">
        <thead>
          <tr>
            <th>#ID</th>
            <th>Doctor Name</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DHI001</td>
            <td>Dr. Ayoub Ghazim</td>
            <td>
              <button className="edit-button">Edit</button>
              <button className="delete-button">Delete</button>
            </td>
          </tr>
          <tr>
            <td>DHI002</td>
            <td>Dr. Imran Shahzaib</td>
            <td>
              <button className="edit-button">Edit</button>
              <button className="delete-button">Delete</button>
            </td>
          </tr>
          <tr>
            <td>DHI003</td>
            <td>Dr. Jonny sharma</td>
            <td>
              <button className="edit-button">Edit</button>
              <button className="delete-button">Delete</button>
            </td>
          </tr>
          <tr>
            <td>DHI004</td>
            <td>Dr. Mia Kapoor</td>
            <td>
              <button className="edit-button">Edit</button>
              <button className="delete-button">Delete</button>
            </td>
          </tr>
          
        </tbody>
      </table>
    </>
    
  )
}
