import React, { Component } from 'react';
import VehicleService from '../services/VehicleService';

class ListCRLocationComponents extends Component{

    constructor(props){
        super(props) 
        this.state = {
            crLocations: []
        }
     //this.deleteCRLocation = this.deleteCRLocation.bind(this);

    }

   /*
    deleteCRLocation(id){   
        VehicleService.deleteVehicle(id).then( res => {
            this.setState({vehicles: this.state.vehicles.filter(vehicle => vehicle.id !== id)});
        });
    }*/

    viewCRLocationVehicles(id){
        this.props.history.push(`/carrentallocation/${id}/vehicles`);
    }
 
    componentDidMount(){
        VehicleService.getCRLocation().then((res) => 
        { 
            this.setState({ crLocations: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center"> Car Rental Location List  </h2>
                <div className= "row">
                
                </div>
                <br></br>

                <div className = "row" >
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Street Address</th>
                                <th>Zipcode</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Country</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {       
                                this.state.crLocations.map(
                                    crLocation =>
                                    <tr key = {crLocation.id}>
                                        <td>    {crLocation.id}                     </td>
                                        <td>    {crLocation.name}                   </td>
                                        <td>    {crLocation.address.streetAddress}  </td>
                                        <td>    {crLocation.address.city}           </td>
                                        <td>    {crLocation.address.zipcode}        </td>
                                        <td>    {crLocation.address.state}          </td>
                                        <td>    {crLocation.address.country}        </td>
                                    
                                        <td>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewCRLocationVehicles(crLocation.id)} className="btn btn-info">View </button>
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

export default ListCRLocationComponents;