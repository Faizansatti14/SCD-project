import React from 'react'
import '../Styling/Sidebar.css'
//import Navbar from './Navbar.js';

export default function Sidebar() {
  return (
    <>
        {/*<Navbar/> */}
        <div className="sidebar">
            <ul>
                
                <li><button>Dashboard</button></li>
                <li><button>Analysis</button></li>
                <li><button>Transaction</button></li>
                <li><button>Registraction</button></li>
                <li><button>Doctors</button></li>
                <li><button>Sales</button></li>
            </ul>
        </div>
    </>
   
  )
}
