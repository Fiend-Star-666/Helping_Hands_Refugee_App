import React, { Component, useEffect, useState } from 'react';
import LoginServices from '../services/LoginServices';
import {  useHistory } from "react-router-dom";

import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';

function ForgotPassword(){
    const history = useHistory()


    const [email,setEmail]= useState('');
    const [driverLicense,setDriverLicense]= useState('');
    const [password,setPassword]= useState('');
    const [confirmPassword, setConfirmPassword]= useState('');

    function handleEmailChange(event){
        setEmail(event.target.value);   
    }

    function handleLicenseChange(event){
        setDriverLicense(event.target.value);
    }

    function handlePasswordChange(event){
        setPassword(event.target.value);
    }

    function handleConfirmPasswordChange(event){
        setConfirmPassword(event.target.value);
    }

    const saveNewPassword = (e) => {
        e.preventDefault();
    if(password==confirmPassword){
        let newPass = {
            email: email, driverLicense: driverLicense ,password: password, confirmPassword: confirmPassword,
        };
        console.log('newPass=> ' + JSON.stringify(newPass));
        
        LoginServices.forgotPassword(newPass).then( res =>{
            history.push(`/profile`);
        })
    // AccountService.createVehicleReservation(vehicleReservation).then( res => {
        //        this.props.history.push('/vehiclereservation/account/view/'+currentUser.accid);
        //});
    }
        
    else{
            console.log("Both Passwords Does not match");
        }
    }
    
    return(
                    <div className= "card"  >
                        <h1>Forgot Password</h1>

                        <label>Email Address:</label>
                        <input type="email"  placeholder="someone@gmail.com" name="email" onChange={handleEmailChange} value={email}/>
                        <br></br>

                        <label>Driver Licence:</label>
                        <input type="text"  placeholder="Driver Licence" name= "driverLicense" onChange={handleLicenseChange} value={driverLicense}/>
                        <br></br>

                        <label>Enter New Password:</label>
                        <input  type="password" placeholder="new password" name="password" onChange={handlePasswordChange} value={password} />
                        <br></br>

                        <label>Confirm New Password:</label>
                        <input type="password" placeholder="new password" name="confirmPassword" onChange={handleConfirmPasswordChange} value={confirmPassword} />
                        <br></br>

                        <button onClick={saveNewPassword}>Submit</button>
                        <br></br>                   
                     </div>
    )
}


export default ForgotPassword

/*

const saveVehicleReservation = (e) => {

    e.preventDefault();
    let vehicleReservation = { 
                               accId: currentUser.accid, vehicleId:selectedVehicleName,creationDate: creationDate, dueDate: dueDate, pickupLocation: selectedcrlid,returnLocation: selectedDropcrlid, additionalDriver: additionalDriver,
                               roadsideAssistance: roadsideAssistance, wifi: wifi, navigation: navigation, childSeat: childSeat, skiRack: skiRack, personalInsurance: personalInsurance,
                               belongingInsurance: belongingInsurance, liabilityInsurance: liabilityInsurance, driver: driver, services: services, equipment: equipment, rentalInsurance: rentalInsurance
                             };

    console.log('vehicleReservation=> ' + JSON.stringify(vehicleReservation));
    
    VehicleService.createVehicleReservation(vehicleReservation).then( res => {
            this.props.history.push('/vehiclereservation/account/view/'+currentUser.accid);
    });
   
}
*/