import React, { Component } from "react";
import AuthService from "../../services/auth.service";
import {Redirect, BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    
    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div className="card-container">
        {(this.state.userReady) ?
        <div>
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.email}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Token:</strong>{" "}
          {currentUser.token.substring(0, 20)} ...{" "}
          {currentUser.token.substr(currentUser.token.length - 20)}
        </p>
        <p>
          <strong>Account Id:</strong>{" "}
          {currentUser.accid}
        </p>
         <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>

        <li>
        <Link to={"/account/view/pinfo/"+currentUser.accid} >
                  View Personal Info
        </Link>
        </li>
      
        <li>
        <Link to={"/vehiclereservation/account/view/"+currentUser.accid} >
                  View Reservations
        </Link>
        </li>
        <br></br>
  
  
  
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </div>: null}
      
      <strong>Actions:</strong>
      <br></br>
      <br></br>
<br></br>

      <li>
        <Link to={"/account/register/admin"} >
                    Create a Receptionist Account
        </Link>
      </li>
      <br></br>

      <li>
        <Link to={"/account/register/member"} >
                    Create a Member Account
        </Link>
      </li>
      <br></br>

      <li>
        <Link to={"/admin/carrentallocation/add"} >
                    Create a Car Rental Location
        </Link>
      </li>
      <br></br>
  
      <li>
        <Link to={"/vehicle/add"} >
                    Add a Vehicle
        </Link>
      </li>
      <br></br>
      
      <li>
        <Link to={"/createvehiclereservation"} >
                    Create a vehicle Reservation
        </Link>
      </li>
      <br></br>

      
      
      <li>
        <Link to={"/home/system"} >
          View System
        </Link>
      </li>
      
      <li>
        <Link to={"/carrentallocations/view"} >
                    View all carRentalLocation
        </Link>
      </li>
      <br></br>

      <li>
        <Link to={"/admin/account/view/all"} >
                    View all Accounts
        </Link>
      </li>
      <br></br>


      <li>
        <Link to={"/admin/vehiclereservations/view/all"} >
                    View all Vehicle Reservation
        </Link>
      </li>
      <br></br>

      <li>
        <Link to={"/vehicle/view"} >
                    View all Vehicles
        </Link>
      </li>
      <br></br>
            
      </div>
    );
  }
 }

/*
    "/carrentallocation/vehicle/view/:id" {ViewCRLocationForComponent}/>
          
    "/carrentallocation/:id/vehicles" {ListVehicleOfCRLocationComponents}/>
                          
    "/admin/vehiclereservation/carrentallocation/view/vehicle/:id" {ListVehicleReservationPerCRLocation}/>
           
    "/vehiclereservation/viewbill/:id" {ViewBillComponentVRID}/>
                          
    "/vehiclereservation/viewbillItem/:id/detailedview/" {ViewBillItem}/>                        
*/