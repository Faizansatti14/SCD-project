import React from 'react'
import '../Styling/AddNewDoctor.css'

export default function AddNewDoctor() {
  return (
    <>
    <h2 style={{textAlign:'center', color:'white'}}>Doctor's Registraction Form</h2>
        <div className="form-container">
            
            <form>
                
                <div className="form-group">
                    <label htmlFor="doctorName">Doctor Name</label>
                    <input type="text" id="doctorName" name="doctorName"/>
                </div>
                <div className="form-group">
                    <label htmlFor="doctorID">Doctor ID</label>
                    <input type="text" id="doctorID" name="doctorID"/>
                </div>
                <div className="form-group">
                    <label htmlFor="doctorDOB">Doctor DOB</label>
                    <input type="date" id="doctorDOB" name="doctorDOB"/>
                </div>
                <div className="form-group">
                    <label htmlFor="doctorEmail">Doctor Email</label>
                    <input type="email" id="doctorEmail" name="doctorEmail"/>
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" name="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="doctorSpec">Doctor Specification</label>
                    <input type="text" id="doctorSpec" name="doctorSpec"/>
                </div>
                <div className="form-group">
                    <label htmlFor="doctorCNIC">Doctor CNIC</label>
                    <input type="text" id="doctorCNIC" name="doctorCNIC"/>
                </div>
                <div className="form-group">
                    <label htmlFor="doctorExp">Doctor Experience</label>
                    <input type="text" id="doctorExp" name="doctorExp"/>
                </div>
                <div className="form-group">
                    <label htmlFor="doctorPhone">Doctor Ph. Number</label>
                    <input type="tel" id="doctorPhone" name="doctorPhone"/>
                </div>
                <div className="form-group">
                    <label htmlFor="joiningDate">Joining Date</label>
                    <input type="date" id="joiningDate" name="joiningDate"/>
                </div>
                <div className="form-group">
                    <label htmlFor="doctorQual">Doctor Qualification</label>
                    <input type="text" id="doctorQual" name="doctorQual"/>
                </div>
                <div className="form-group">
                    <label htmlFor="doctorType">Doctor Type</label>
                    <input type="text" id="doctorType" name="doctorType"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Set a Password</label>
                    <input type="password" id="password" name="password"/>
                </div>
                <div className="form-group description">
                    <label htmlFor="description">Add Description</label>
                    <textarea id="description" name="description" rows="4" maxength="250"></textarea>
                    <small>Maximum limit 250 words</small>
                </div>
                <div className="form-group upload">
                    <input type="file" id="uploadPicture" name="uploadPicture"/>
                    <label htmlFor="uploadPicture">Upload Picture</label>
                </div>
                <div className="form-group save-button">
                    <button type="submit">Save</button>
                </div>
            </form>
    </div>
    </>
    
  )
}
