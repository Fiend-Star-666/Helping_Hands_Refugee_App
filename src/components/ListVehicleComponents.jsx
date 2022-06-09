import React, { Component } from 'react';
import VehicleService from '../services/VehicleService';
import AuthService from '../services/auth.service';

class ListVehicleComponents extends Component{

    constructor(props){
        super(props) 

        this.state = {
            vehicles: [],
            showAdminBoard: false

        }
        this.addVehicle = this.addVehicle.bind(this);
        //this.editVehicle = this.editVehicle.bind(this);
        this.deleteVehicle = this.deleteVehicle.bind(this);
        this.addVehicleLog = this.addVehicleLog.bind(this);
    }

    

    addVehicleLog(vehicleId){
        this.props.history.push(`/vehicle/${vehicleId}/createvehiclelog`);
    }

    addVehicle(){
        this.props.history.push('/vehicle/add');
    }
   
    /*    
     editVehicle(id){
        this.props.history.push(`/vehicle/edit/${id}`)
     }
    */

    deleteVehicle(id){   
        VehicleService.deleteVehicle(id).then( res => {
            this.setState({vehicles: this.state.vehicles.filter(vehicle => vehicle.id !== id)});
        });
    }

    viewVehicle(id){
        this.props.history.push(`/vehicle/view/${id}`);
    }

    /**
     * ReactJS and SpringBoot integration , and represent data on the browser from DB.
     * HTTP axois.
    */
    
    componentDidMount(){

        const user = AuthService.getCurrentUser();

        if (user) {
          this.setState({
            currentUser: user,
            showAdminBoard: user.roles.includes("ROLE_ADMIN"),
          });
        }

        VehicleService.getVehicles().then((res) => 
        { 
            this.setState({ vehicles: res.data});
        });
    }
    

    render() {
        const { currentUser, showAdminBoard } = this.state;

        return (

          <div>   
            <div>
                <h2 className="text-center">List of all Vehicles with Status:</h2>
                <br></br>
                <div className= "container" style={{display: 'flex', justifyContent: 'center'}}>
                    <button className="btn btn-primary btn-sm" onClick={this.addVehicle}> Add Vehicle </button>
                </div>
                <br></br>
                <div className = "row" style={{display: 'flex', justifyContent: 'center'}}>
                  <div className="col-4 d-flex justify-content-center text-center">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th className="align-middle">ID</th>
                                <th className="align-middle">License Plate Number</th>
                                <th className="align-middle">Stock Number</th>
                                <th className="align-middle">Passenger Capacity</th>
                                <th className="align-middle">Sunroof</th>
                                <th className="align-middle">Model</th>
                                <th className="align-middle">Make</th>
                                <th className="align-middle">Manufacturing Year</th>
                                <th className="align-middle">Mileage</th>
                                <th className="align-middle">Barcode</th>
                                <th className="align-middle">Status</th>
                                <th className="align-middle">Type</th>
                                <th className="align-middle">Actions</th>
                                
                            </tr>
                        </thead>
                      
                        <tbody>
                            {       
                                this.state.vehicles.map(
                                    vehicle =>
                                    <tr key = {vehicle.id}>
                                        <td className="align-middle">    {vehicle.id}                      </td>
                                        <td className="align-middle">    {vehicle.numberPlate}             </td>
                                        <td className="align-middle">    {vehicle.stockNumber}             </td>
                                        <td className="align-middle">    {vehicle.passengerCapacity}       </td>
                                        <td className="align-middle">    {String(vehicle.hasSunroof)}      </td>
                                        <td className="align-middle">    {vehicle.model}                   </td>
                                        <td className="align-middle">    {vehicle.make}                    </td>
                                        <td className="align-middle">    {vehicle.manufacturingYear}       </td>
                                        <td className="align-middle">    {vehicle.mileage}                 </td>
                                        <td className="align-middle">    {vehicle.barcode}                 </td>
                                        <td className="align-middle">    {vehicle.status}                  </td>
                                        <td className="align-middle">    {vehicle.type}                    </td>
                                        
                                        <td>
                                      <div className="btn-group">
                                        <button style={{marginLeft: "10px", marginRight: "10px" }} onClick={ () => this.viewVehicle(vehicle.id)} className="btn btn-info">View Vehicle</button>

                                        {showAdminBoard && (
                                            <button style={{marginRight: "10px" , marginRight: "10px"}} onClick={ () => this.addVehicleLog(vehicle.id)} className="btn btn-success">Add Vehicle Log </button>
                                        )}
                                        
                                        
                                        {showAdminBoard && (
                                            <button style={{marginLeft: "10px" , marginRight: "10px"}} onClick={ () => this.deleteVehicle(vehicle.id)} className="btn btn-danger">Delete </button>
                                        )}
                                      </div>
                                        </td>
                                        
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                  </div>
                </div>
            </div>
          </div>  
        )
    }
}

export default ListVehicleComponents;

//<button onClick = { () => this.editVehicle(vehicle.id)} className="btn btn-info"> Update</button>
                                


/*
    <th>Car Rental Location</th>
    <th>Vehicle Logs</th>
    <th>Vehicle Reservation</th>
    <th>Parking Stall</th>

        <td>    {vehicle.carRentalLocation}       </td>
        <td>    {vehicle.vehicle_log}             </td>
        <td>    {vehicle.vehiclereservation}      </td>
        <td>    {vehicle.parkingstall}            </td>

*/