import React, { Component } from 'react';
import VehicleService from '../services/VehicleService';

class ViewReservationAccount extends Component{
    constructor(props){
        super(props) 
        this.state = {
            id: this.props.match.params.id,
            vrReservations: [],
            vrnumber:'',
            vehicleid:''
        }
    }

    viewAccount(id){
        this.props.history.push(`/account/view/pinfo/${id}`);
    }

    viewVehicle(id){
        VehicleService.getVehicleByVRId(id).then((res) =>
        {
               this.state.vehicleid=res.data;
               this.props.history.push(`/vehicle/view/${this.state.vehicleid}`);

        });

    }
    
    PickupVehicle(vrid){
        VehicleService.pickupVehicle(vrid).then((res)=>{
            VehicleService.getVehicleByVRId(vrid).then((rest) =>
        {
               this.state.vehicleid=rest.data;
               this.props.history.push(`/vehicle/view/${this.state.vehicleid}`);

        });
        });
    }

    viewBill(vrid){
        this.props.history.push(`/vehiclereservation/viewbill/${vrid}`);
    }

    componentDidMount(){
        VehicleService.getVReservationPerAccount(this.state.id).then((res) => 
        { 
            this.setState({ vrReservations: res.data});
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
                                    <td>    {vrReservation.id}                             </td>
                                    <td>    {vrReservation.reservationNumber}               </td>
                                    <td>    {vrReservation.creationDate.substr(0,16)}       </td>
                                    <td>    {vrReservation.dueDate.substr(0,16)}            </td>
                                    <td>    {vrReservation.pickupLocationName}              </td>
                                    <td>    {vrReservation.returnLocationName}              </td>
                                    <td>
                                        
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.viewVehicle(vrReservation.id)} className="btn btn-dark">View Vehicle</button>
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.viewAccount(this.state.id)} className="btn btn-dark">View Account</button>
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.PickupVehicle(vrReservation.id)} className="btn btn-dark"> PickUp Vehicle</button>
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.viewBill(vrReservation.id)} className="btn btn-dark"> View Bill</button>
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

export default ViewReservationAccount;


/*    
<button style={{marginLeft: "10px"}} onClick={ () => this.viewAccount(this.state.id)} className="btn btn-info">View Account</button>
<button style={{marginLeft: "10px"}} onClick={ () => this.viewVehicle(this.state.id)} className="btn btn-dark">View Vehicle</button>

*/







//<button style={{marginLeft: "10px"}} onClick={ () => this.viewCRLocationVehicles(crLocation.id)} className="btn btn-info">View </button>



/*

{       
                                this.state.vrReservations.map(
                                    vrReservation =>
                                    <tr key = {vrReservation.id}>
                                        <td>    {console.log(vrReservation.vehiclereservation)}                           </td>
                                        <td>    {vrReservation.vehiclereservation.reservationNumber}            </td>
                                        <td>    {vrReservation.vehiclereservation.creationDate}    </td>
                                        <td>    {vrReservation.vehiclereservation.dueDate}         </td>
                                        <td>    {vrReservation.vehiclereservation.pickupLocationName}           </td>
                                        <td>    {vrReservation.vehiclereservation.returnLocationName}           </td>

                                        <td>
                                        
                                        </td>
                                        
                                    </tr>
                                )
                            }
*/