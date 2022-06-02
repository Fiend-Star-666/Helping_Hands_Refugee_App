import React, { Component } from 'react';
import VehicleService from '../services/VehicleService';

class ListVehicleReservationsAll extends Component{
    constructor(props){
        super(props) 
        this.state = {
            vrReservations: []
        }
    }

    componentDidMount(){
        VehicleService.getVReservationAll().then((res) => 
        { 
            this.setState({ vrReservations: res.data});
        });
    }

    viewVehicle(id){
        this.props.history.push(`/vehicle/view/${id}`);
    }



    render() {
        return (
            
            <div>
                <h2 className="text-center">All Vehicle Reservation:{this.state.id}  </h2>
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
                                    <td>    {vrReservation.id}                              </td>
                                    <td>    {vrReservation.reservationNumber}               </td>
                                    <td>    {vrReservation.creationDate.substr(0,10)}       </td>
                                    <td>    {vrReservation.dueDate.substr(0,10)}            </td>
                                    <td>    {vrReservation.pickupLocationName}              </td>
                                    <td>    {vrReservation.returnLocationName}              </td>
                                    <td>
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.viewVehicle(vrReservation.vehicle.id)} className="btn btn-dark">View Vehicle</button>
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

export default ListVehicleReservationsAll;