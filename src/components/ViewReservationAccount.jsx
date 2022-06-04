import React, { Component } from 'react';
import VehicleService from '../services/VehicleService';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import Moment from 'moment';

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
        Moment.locale('en');

        return (
            <div>
            <div>
                <h2 className="text-center"> Vehicle Reservation Related to account ID:{this.state.id}  </h2>
                
            </div>
                <br></br>
    
                    <table className="table table-striped table-bordered ">
                        <thead>
                            <tr>
                                <th className="align-middle">ID</th>
                                <th className="align-middle">Reservation Number</th>
                                <th className="align-middle">Creation Date</th>
                                <th className="align-middle">Due Date</th>
                                <th className="align-middle">Pickup Location Name</th>
                                <th className="align-middle">Return Location Name</th>
                                <th className="align-middle">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.vrReservations.map(
                                vrReservation =>
                                <tr key = {vrReservation.id}>
                                    <td className="align-middle">    {vrReservation.id}                              </td>
                                    <td className="align-middle">    {vrReservation.reservationNumber}               </td>
                                    <td className="align-middle" style={{width: '200px'}}>  {Moment(vrReservation.creationDate).format('DD-MM-yyyy')}   </td>
                                    <td className="align-middle" style={{width: '200px'}}>  {Moment(vrReservation.dueDate).format('DD-MM-yyyy')}      </td>        
                                    <td className="align-middle">    {vrReservation.pickupLocationName}              </td>
                                    <td className="align-middle">    {vrReservation.returnLocationName}              </td>
                                    <td className='row'>
                                     <div className='btn-group'>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewVehicle(vrReservation.id)} className="btn btn-info btn-sm">View Vehicle</button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewAccount(this.state.id)} className="btn btn-info btn-sm">View Account</button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewBill(vrReservation.id)} className="btn btn-info btn-sm"> View Bill</button>
                                     </div>
                                     <div className='btn-group'>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.PickupVehicle(vrReservation.id)} className="btn btn-success btn-sm"> Pickup Vehicle</button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.ReturnVehicle(vrReservation.id)} className="btn btn-primary btn-sm"> Return Vehicle</button>
                                     </div>
                                    </td>

                                    
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
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