import React from 'react'
import '../DoctorsModuleStyling/ViewPMF.css';

export default function ViewPMF() {
  return (
    <>
        <h2>Patient Information</h2>
    <table>
        <tr>
            <th>Category</th>
            <th>Details</th>
        </tr>
        <tr>
            <td>Patient Name:</td>
            <td>Faizan Satti</td>
        </tr>
        <tr>
            <td>Appointment Time & date:</td>
            <td>10/06/2023, 01:00PM - 03:00PM</td>
        </tr>
        <tr>
            <td>Allergy type:</td>
            <td>Atopic dermatitis</td>
        </tr>
        <tr>
            <td>Medication Description:</td>
            <td>Medications are JAK inhibitors, upadacitinib (Rinvoq) and abrocitinib (Cibinqo). The FDA has placed a box warning on these three medications.</td>
        </tr>
    </table>
    </>
    
  )
}
