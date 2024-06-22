import React from 'react'
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';
import '../Styling/Dashboard.css';
export default function Dashboard() {
  return (
    <>
      <Navbar/>
      <Sidebar/>    
        <div className="button-row">
            <button className='bt-1'>Total Customers</button>
            <button className='bt-2'>Total Income</button>
            <button className='bt-3'>Total Doctors</button>
            <button className='bt-4'>Reviews</button>
        </div>
      <div className='container1'>

      </div>
      <div className='container2'>
        
      </div>
    </>
  )
}
