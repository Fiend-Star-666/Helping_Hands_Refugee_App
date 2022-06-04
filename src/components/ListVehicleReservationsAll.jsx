import React, { Component } from 'react';
import VehicleService from '../services/VehicleService';
import Moment from 'moment';

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
            VehicleService.getVehicleByVRId(id).then((res) =>
            {
                   this.state.vehicleid=res.data;
                   this.props.history.push(`/vehicle/view/${this.state.vehicleid}`);  
            });
    
    }



    render() {
        Moment.locale('en')
        return (
            
            <div>
                <h2 className="text-center">All Vehicle Reservation:{this.state.id}  </h2>
                <div className= "row">
                
                </div>
                <br></br>

                <div className = "row">
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
                                    <td style={{width: '200px'}}>    {Moment(vrReservation.creationDate).format('DD-MM-yyyy')}                    </td>
                                    <td style={{width: '200px'}}>    {Moment(vrReservation.dueDate).format('DD-MM-yyyy')}                         </td>
                                    <td>    {vrReservation.pickupLocationName}              </td>
                                    <td>    {vrReservation.returnLocationName}              </td>
                                    <td>
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.viewVehicle(vrReservation.id)} className="btn btn-primary btn-sm">View Vehicle</button>
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