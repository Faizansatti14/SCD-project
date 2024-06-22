import React from 'react';
import '../DoctorsModuleStyling/DoctorsViewAppoitments.css';

export default function DoctorViewAppoitments() {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>SR No</th>
                        <th>Patient Name</th>
                        <th>Date & Time</th>
                        <th>Option 1</th>
                        <th>Option 2</th>
                        <th>Option 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>Ali Imran</td>
                        <td>08/06/2023<br />10:00AM - 11:30AM</td>
                        <td><a href="#" className="btn btn-view">View PMF</a></td>
                        <td><a href="#" className="btn btn-reschedule">Reschedule</a></td>
                        <td><a href="#" className="btn btn-more">Cancel</a></td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>Umar Khawaja</td>
                        <td>09/06/2023<br />9:00AM - 11:30AM</td>
                        <td><a href="#" className="btn btn-view">View PMF</a></td>
                        <td><a href="#" className="btn btn-reschedule">Reschedule</a></td>
                        <td><a href="#" className="btn btn-more">Cancel</a></td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>Mubashir Nazir</td>
                        <td>09/06/2023<br />3:00PM - 4:30PM</td>
                        <td><a href="#" className="btn btn-view">View PMF</a></td>
                        <td><a href="#" className="btn btn-reschedule">Reschedule</a></td>
                        <td><a href="#" className="btn btn-more">Cancel</a></td>
                    </tr>
                    <tr>
                        <td>04</td>
                        <td>Faizan Satti</td>
                        <td>09/06/2023<br />1:00PM - 2:30PM</td>
                        <td><a href="#" className="btn btn-view">View PMF</a></td>
                        <td><a href="#" className="btn btn-reschedule">Reschedule</a></td>
                        <td><a href="#" className="btn btn-more">Cancel</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}