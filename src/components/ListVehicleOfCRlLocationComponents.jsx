import React, { Component } from 'react';
import VehicleService from '../services/VehicleService';
import AuthService from '../services/auth.service';

class ListVehicleOfCRlLocationComponents extends Component{

    constructor(props){
        super(props) 

        this.state = {
            id: this.props.match.params.id,
            showAdminBoard: false,

            vehicles: []
        }
        //this.addVehicle = this.addVehicle.bind(this);
        this.deleteVehicle = this.deleteVehicle.bind(this);

    }

   viewVehicleReservation(id){
        this.props.history.push(`/admin/vehiclereservation/carrentallocation/view/vehicle/${id}`);
   }

    deleteVehicle(id){   
        VehicleService.deleteVehicle(id).then( res => {
            this.setState({vehicles: this.state.vehicles.filter(vehicle => vehicle.id !== id)});
        });
    }

    viewVehicle(id){
        this.props.history.push(`/vehicle/view/${id}`);
    }
 
    componentDidMount(){

        const user = AuthService.getCurrentUser();

        if (user) {
          this.setState({
            currentUser: user,
            showAdminBoard: user.roles.includes("ROLE_ADMIN"),
          });
        }


        VehicleService.getVehiclesByCRLocation(this.state.id).then((res) => 
        { 
            this.setState({ vehicles: res.data});
        });
    }

    render() {
        const { currentUser, showAdminBoard } = this.state;
        return (
          
              <div className="container">

                <h2 className="text-center"> Vehicle List at Car Rental Location:{this.state.id}</h2>
                
                <br></br>

                <div className = "row justify-content-md-center" >
                    <table className="table table-striped table-bordered ">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>License Plate Number</th>
                                <th>Stock Number</th>
                                <th>Passenger Capacity</th>
                                <th>Sunroof</th>
                                <th>Model</th>
                                <th>Make</th>
                                <th>Manufacturing Year</th>
                                <th>Mileage</th>
                                <th>Barcode</th>
                                <th>Status</th>
                                <th>Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {       
                                this.state.vehicles.map(
                                    vehicle =>
                                    <tr key = {vehicle.id}>
                                        <td>    {vehicle.id}                      </td>
                                        <td>    {vehicle.numberPlate}             </td>
                                        <td>    {vehicle.stockNumber}             </td>
                                        <td>    {vehicle.passengerCapacity}       </td>
                                        <td>    {String(vehicle.hasSunroof)}      </td>
                                        <td>    {vehicle.model}                   </td>
                                        <td>    {vehicle.make}                    </td>
                                        <td>    {vehicle.manufacturingYear}       </td>
                                        <td>    {vehicle.mileage}                 </td>
                                        <td>    {vehicle.barcode}                 </td>
                                        <td>    {vehicle.status}                  </td>
                                        <td>    {vehicle.type}                    </td>
                                        
                                        <td className='btn-group'>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewVehicle(vehicle.id)} className="btn btn-info btn-sm">View Vehicle</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewVehicleReservation(vehicle.id)} className="btn btn-info btn-sm">View Reservations</button>
                                            
                                            {showAdminBoard && (
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteVehicle(vehicle.id)} className="btn btn-danger btn-sm">Delete </button>
                                            )}
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

export default ListVehicleOfCRlLocationComponents;