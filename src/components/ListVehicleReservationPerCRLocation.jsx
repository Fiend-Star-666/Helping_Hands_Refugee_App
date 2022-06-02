import React, { Component } from 'react';
import VehicleService from '../services/VehicleService';
//correct file name and vehicle mein uski reservations dikhani hai
class ListVehicleReservationPerCRLocation extends Component{
    constructor(props){
        super(props) 
        this.state = {
            id: this.props.match.params.id,
            vrReservations: []
        }
    }

    componentDidMount(){
        VehicleService.getVReservationPerLocation(this.state.id).then((res) => 
        { 
            this.setState({ vrReservations: res.data});
            //console.log(res.data)
            });
    }


    render() {
        return (
            <div>
                <h2 className="text-center"> Vehicle Reservation Related to account ID:{this.state.id}  </h2>
                <div className= "row">
                
                </div>
                <br></br>
            
                <div className = "row" >
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Reservation Number</th>
                                <th>Creation Date</th>
                                <th>Due Date</th>
                                <th>Pickup Location Name</th>
                                <th>Return Location Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.vrReservations.map(
                                vrReservation =>
                                <tr key = {vrReservation.id}>
                                    <td>{vrReservation.id}</td>
                                    <td>    {vrReservation.reservationNumber}               </td>
                                    <td>    {vrReservation.creationDate.substr(0,16)}       </td>
                                    <td>    {vrReservation.dueDate.substr(0,16)}            </td>
                                    <td>    {vrReservation.pickupLocationName}              </td>
                                    <td>    {vrReservation.returnLocationName}              </td>
                                    <td>
                                    

                                    </td>
                                    
                                    
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListVehicleReservationPerCRLocation;
/*
                                    



                                    <button style={{marginLeft: "10px"}} onClick={ () => this.viewVehicle(vrReservation.vehicle.id)} className="btn btn-dark">View Vehicle</button>
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.viewAccount(this.state.id)} className="btn btn-dark">View Account</button>
*/