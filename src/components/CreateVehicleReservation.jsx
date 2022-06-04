import React, { Component, useEffect, useState } from 'react';
import { useParams, useHistory, Prompt } from "react-router-dom";
import VehicleService from '../services/VehicleService';
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";  
import { render } from '@testing-library/react';
import AuthService from "../services/auth.service";
import '../css/style.css';

let selectedcrlid;
let selectedDropcrlid;
let CRLname=['Choose CRLocation'];
let CRLid=['Choose CRLid'];
let vehicles=[];
let vehicleSet = new Map();
let vehicleName = new Map('',[]);
let availableNames = [];
let availableVehicles = [];


export default function CreateVehicleReservation(){  
    const history = useHistory()

    const currentUser = AuthService.getCurrentUser();
    
    const [creationDate, setCreationDate] = useState(new Date());
    const [dueDate, setDueDate] = useState(new Date()); 

    const [pickupLocation,setPickupLocation] = useState('');
    const [returnLocation,setReturnLocation] = useState('');
    

    const handleCreationDate = (date) => {
    setCreationDate(date);
    };

    const handleDueDate = (date) => {
    setDueDate(date);
    };

    const handleChangePickupLocation = (event) => { 
         setPickupLocation(event.target.value);
     };

    const handleChangeReturnLocation = (event) =>{
        setReturnLocation(event.target.value);
    };

    const [selectedVehicleName, setSelectedVehicleName]=useState('');

    const handleChangeSelectedVehicleName = (event) =>{
        setSelectedVehicleName(event.target.value);
    };

    useEffect(() => {
        VehicleService.getCRLocation()
            .then((response) =>{
                response.data.forEach(element => {
                    CRLname.push(element.name);
                    CRLid.push(element.id);
                    vehicles.push(element.vehicle);
                    
                    vehicleSet.set(element.id,element.vehicle);
                    
                })
                }
            )
            vehicleSet.set("Choose CRLid",[{}])        
    } , []);
    
//https://react-hooks-cheatsheet.com/useeffect

var i=0;    //iterator of a for loop
var j=0;

var elementl;
var selectedcar;


if (typeof(vehicleSet.get(CRLid[selectedcrlid])) != "undefined") {
   elementl = vehicleSet.get(CRLid[selectedcrlid]).map(item =>{
        if(item.status=="Available"){
            return (<option key={item.barcode} value={item.id}>{item.make+" "+item.model}</option>);
        }
    });
}
    
else{
    elementl=<option value="">{"Choose Vehicle"}</option>;
}
 
if(typeof(elementl) != "undefined" && typeof(vehicleSet.get(CRLid[selectedcrlid])) != "undefined"){
    elementl.map(element => {
        if(element==selectedVehicleName){
            selectedcar=element.barcode;
           // console.log(  +"hehe");
        }
    })
}

//___________________________________________________________additional things__________________________________________
//Services
const [services,setServices] = useState('');

const handleServices = (event) => {
    setServices(event.target.value);
}

        const [driver,setDriver] = useState('');

        const handleDriver = (event) => { 
            setDriver(event.target.value);
        };

        const [roadsideAssistance,setRoadsideAssistance] = useState('');

        const handleRoadsideAssistance = (event) => { 
            setRoadsideAssistance(event.target.value);
        };

        const [wifi,setwifi] = useState('');

        const handleWifi = (event) => { 
            setwifi(event.target.value);
        };

//Equipment
const [equipment,setEquipment] = useState('');

const handleEquipment = (event) => {
    setEquipment(event.target.value);
}

        const [navigation,setNavigation] = useState('');

        const handleNavigation = (event) => { 
            setNavigation(event.target.value);
        };

        const [childSeat,setChildSeat] = useState('');

        const handleChildSeat = (event) => { 
            setChildSeat(event.target.value);
        };

        const [skiRack,setSkiRack] = useState('');

        const handleSkiRack = (event) => { 
            setSkiRack(event.target.value);
        };


//RentalInsurance
const [rentalInsurance,setRentalInsurance] = useState('');

const handleRentalInsurance = (event) => {
    setRentalInsurance(event.target.value);
}
        const [personalInsurance,setPersonalInsurance] = useState('');

        const handlePersonalInsurance = (event) => { 
            setPersonalInsurance(event.target.value);
        };

        const [belongingInsurance,setBelongingInsurance] = useState('');

        const handleBelongingInsurance = (event) => { 
            setBelongingInsurance(event.target.value);
        };

        const [liabilityInsurance,setLiabilityInsurance] = useState('');

        const handleLiabilityInsurance = (event) => { 
            setLiabilityInsurance(event.target.value);
        };


//additional Driver
const [additionalDriver,setAdditionalDriver] = useState('');

const handleAdditionalDriver = (event) => { 
    setAdditionalDriver(event.target.value);
};

     
/*

additional Driver

Services
    driver
    roadside assistance
    wifi
Equipment   
    navigation
    ChildSeat
    SkiRack
RentalInsurance
    PersonalInsurance
    BelongingInsurance
    Liability Insurance
*/


//__________________________________________________________________________________________________
const saveVehicleReservation = (e) => {

    e.preventDefault();
    let vehicleReservation = { 
                               accId: currentUser.accid, vehicleId:selectedVehicleName,creationDate: creationDate, dueDate: dueDate, pickupLocation: selectedcrlid,returnLocation: selectedDropcrlid, additionalDriver: additionalDriver,
                               roadsideAssistance: roadsideAssistance, wifi: wifi, navigation: navigation, childSeat: childSeat, skiRack: skiRack, personalInsurance: personalInsurance,
                               belongingInsurance: belongingInsurance, liabilityInsurance: liabilityInsurance, driver: driver, services: services, equipment: equipment, rentalInsurance: rentalInsurance
                             };

    console.log('vehicleReservation=> ' + JSON.stringify(vehicleReservation));
    let saveflag=true
    
    if(saveflag){
    VehicleService.createVehicleReservation(vehicleReservation).then( res => {
            history.push('/vehiclereservation/account/view/'+currentUser.accid);
    });
    }

    else {return (<Prompt message="There has been some error Please try again later" />);}

   
}
//_________________________________________________________Conditional Rendering of the Services and all_______________________________________
let service;
if(services=='True'){
    service=( 
                <div>
                    <br></br>
                <div className = "form-group mx-4">
                    <label> 
                    Driver:
                    <div>
                        <select value={driver} onChange={handleDriver} className='mx-3'>
                            <option  value={null}> {"Choose Yes/No"} </option>
                        <option  value={"True"}> {"Yes"} </option>
                        <option  value={"False"}> {"No"} </option>  
                        </select>
                    </div>
                    </label>
                </div>

                <div className = "form-group mx-4">
                    <label> 
                    Roadside Assistance:
                    <div>
                        <select value={roadsideAssistance} onChange={handleRoadsideAssistance} className='mx-3'>
                        <option  value={null}> {"Choose Yes/No"} </option>
                        <option  value={"True"}> {"Yes"} </option>
                        <option  value={"False"}> {"No"} </option>  
                        </select>
                    </div>
                    </label>
                </div>
                
                <div className = "form-group mx-4">
                    <label> 
                    Wifi:
                    <div>
                        <select value={wifi} onChange={handleWifi} className='mx-3'>
                        <option  value={null}> {"Choose Yes/No"} </option>
                        <option  value={"True"}> {"Yes"} </option>
                        <option  value={"False"}> {"No"} </option>  
                        </select>
                    </div>
                    </label>
            </div>
            </div>
        );

}

let Equipment;
if(equipment=='True'){
    Equipment=(
        <div>
            <br></br>
                <div className = "form-group mx-4">
                <label> 
                Navigation:
                <div>    
                    <select value={navigation} onChange={handleNavigation} className='mx-3'>                                                            
                    <option  value={null}> {"Choose Yes/No"} </option>
                    <option  value={"True"}> {"Yes"} </option>
                    <option  value={"False"}> {"No"} </option>  
                    </select>
                </div>
                </label>
            </div>

            <div className = "form-group mx-4">
                <label> 
                Child Seat:
                <div>    
                    <select value={childSeat} onChange={handleChildSeat} className='mx-3'>
                    <option  value={null}> {"Choose Yes/No"} </option>
                    <option  value={"True"}> {"Yes"} </option>
                    <option  value={"False"}> {"No"} </option>  
                    </select>
                </div>
                </label>
            </div>

            <div className = "form-group mx-4">
                <label> 
                SkiRack:
                <div>   
                    <select value={skiRack} onChange={handleSkiRack} className='mx-3'>
                    <option  value={null}> {"Choose Yes/No"} </option>
                    <option  value={"True"}> {"Yes"} </option>
                    <option  value={"False"}> {"No"} </option>  
                    </select>
             </div>
                </label>
            </div>
        </div>
            );
}

let insurance;

if(rentalInsurance=='True'){
    insurance=(
    <div>
        <br></br>
        <div className = "form-group mx-4">
            <label> 
            Personal Insurance:
            <div>
                <select value={personalInsurance} onChange={handlePersonalInsurance} className='mx-3'>                                                            
                <option  value={null}> {"Choose Yes/No"} </option>
                <option  value={"True"}> {"Yes"} </option>
                <option  value={"False"}> {"No"} </option>  
                </select>
            </div>
            </label>
        </div>

        <div className = "form-group mx-4">
            <label> 
            Belonging Insurance:
            <div>
                <select value={belongingInsurance} onChange={handleBelongingInsurance} className='mx-3'>
                <option  value={null}> {"Choose Yes/No"} </option>
                <option  value={"True"}> {"Yes"} </option>
                <option  value={"False"}> {"No"} </option>  
                </select>
            </div>
            </label>
        </div>
        
        <div className = "form-group mx-4">
            <label> 
            Liability Insurance:
            <div>
                <select value={liabilityInsurance} onChange={handleLiabilityInsurance} className='mx-3'>
                <option  value={null}> {"Choose Yes/No"} </option>
                <option  value={"True"}> {"Yes"} </option>
                <option  value={"False"}> {"No"} </option>  
                </select>
            </div>
            </label>
        </div>
    </div>
        
    );
}


return(
         <div>
            <br></br>
                <div className="container">
                    <div className="row">
 
                        <div className="card col-md-8 offset-md-1 ">

                            <h3 className="text-center">Create Reservation for Account id:{currentUser.accid}</h3>
                            <h4 className="text-center">Email Id: {currentUser.email}</h4>
                            <div className = "card-body">
                                <form>
                                        
                                    <div className = "form-group">
                                        <label>Creation Date:</label>
                                        <DatePicker selected={creationDate} value={creationDate} onChange={handleCreationDate} dateFormat="dd/MM/yyyy"/> 
                                    </div>

                                    <div className = "form-group">
                                        <label>Due Date:</label>
                                        <DatePicker selected={dueDate} value={dueDate} onChange={handleDueDate} dateFormat="dd/MM/yyyy"/> 
                                    </div>
                                    
                                    <div className = "form-group">
                                            <label> 
                                                PickUp Location:
                                                <br></br>
                                                    <select value={pickupLocation} onChange={handleChangePickupLocation}>
                                                            {
                                                                CRLname.map((element) => {
                                                                    return (<option key={element.id} value={element.id}> {element} </option>)
                                                                })
                                                            }
                                                    </select>
                                            </label>
                                    </div>
                                    <div>
                                        {
                                        CRLname.forEach(element => {
                                           if(element==pickupLocation){
                                                selectedcrlid=i;
                                           } 
                                           else{
                                               i++;
                                            }
                                        })
                                    }

                                    {
                                        CRLname.forEach(element => {
                                           if(element==returnLocation){
                                                selectedDropcrlid=j;
                                           } 
                                           else{
                                               j++;
                                            }
                                        })
                                    }
                                    <div>
                                        <label>
                                                Select Vehicle:
                                                <br></br>
                                                    <select value={selectedVehicleName} onChange={handleChangeSelectedVehicleName}> 
                                                        {elementl}
                                                    </select>
                                            </label>
                                        </div>
                                    </div>
                                    <div className = "form-group">
                                            <label> 
                                                Return Location:
                                                <br></br>
                                                <select value={returnLocation} onChange={handleChangeReturnLocation}>
                                                        {
                                                            CRLname.map((element) => {
                                                                    return (<option key={element.id} value={element.id}> {element} </option>)
                                                                })
                                                        }
                                                </select>
                                            </label>
                                    </div>
                                    <div>
                                        <div>
                                            <label style={{fontSize: 30}}><b>Services required:</b>
                                            <div>
                                                <select value={services} onChange={handleServices} className='mx-3'>
                                                        <option  value={null}> {"Choose Yes/No"} </option>
                                                        <option  value={"True"}> {"Yes"} </option>
                                                        <option  value={"False"}> {"No"} </option>  
                                                </select>
                                                </div>
                                            </label>
                                        </div>
                                        {service}
                                    </div>
                                    
                                    <div>
                                        <div>
                                            <label style={{fontSize: 30}}><b>Equipment required:</b>
                                            <div>
                                                <select value={equipment} onChange={handleEquipment} className='mx-3'>
                                                        <option  value={null}> {"Choose Yes/No"} </option>
                                                        <option  value={"True"}> {"Yes"} </option>
                                                        <option  value={"False"}> {"No"} </option>  
                                                </select>
                                            </div>
                                            </label>
                                        </div>                  
                                            {Equipment}
                                    </div>

                                    <div>
                                        <div>
                                            <label style={{fontSize: 30}}><b>Insurance options:</b>
                                            <div>
                                                <select value={rentalInsurance} onChange={handleRentalInsurance} className='mx-3'>
                                                        <option  value={null}> {"Choose Yes/No"} </option>
                                                        <option  value={"True"}> {"Yes"} </option>
                                                        <option  value={"False"}> {"No"} </option>  
                                                </select>
                                            </div>
                                            </label>
                                        </div>
                                            {insurance}
                                    </div>

                                    <div>       
                                        <label style={{fontSize: 30}}><b>Other Services:</b>
                                            <br></br>
                                                <div className = "form-group mx-4">
                                                    <label> 
                                                    Additional Driver:
                                                    <div>
                                                        <select value={additionalDriver} onChange={handleAdditionalDriver} className='mx-3'>
                                                            <option  value={null}> {"Choose Yes/No"} </option>
                                                        <option  value={"True"}> {"Yes"} </option>
                                                        <option  value={"False"}> {"No"} </option>  
                                                        </select>
                                                    </div>
                                                    </label>
                                                </div>
                                        </label>
                                    </div>
                                    <button className="btn btn-success" onClick={saveVehicleReservation}>Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
        </div>    
    )
}