import React, { Component } from 'react';
import VehicleService from '../services/VehicleService';

class ViewPersonalInfoAccount extends Component{
    constructor(props){
        super(props) 
        this.state = {
            id: this.props.match.params.id,
            PersonalInfo: []
        }
    }

        viewVehicleReservations(id){
            this.props.history.push(`/vehiclereservation/account/view/${id}`);
        }
        
        componentDidMount(){
            VehicleService.getAllPersonalInfo(this.state.id).then((res) => 
            { 
                this.setState({ PersonalInfo: res.data});
            });
        }

        render() {
            return (
                <div>   
                    <h2 className="text-center"> Personal Profile of User:{this.state.id}  </h2>
                    <div className= "row">
                    
                    </div>
                    <br></br>
    
                    <div className = "row" >
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email ID</th>
                                    <th>Phone Number</th>
                                    <th>Street Address</th>
                                    <th>Pincode</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Country</th>
                                </tr>
                            </thead>
                            <tbody>
                                {       
                                    this.state.PersonalInfo.map(
                                        personalInfo =>
                                        <tr key = {personalInfo.person.name}>
                                            <td>    {personalInfo.person.name}                  </td>
                                            <td>    {personalInfo.person.email}                 </td>
                                            <td>    {personalInfo.person.phone}                 </td>
                                            <td>    {personalInfo.person.address.streetAddress} </td>
                                            <td>    {personalInfo.person.address.zipcode}       </td>
                                            <td>    {personalInfo.person.address.city}          </td>
                                            <td>    {personalInfo.person.address.state}         </td>
                                            <td>    {personalInfo.person.address.country}       </td>

                                            <td>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewVehicleReservations(this.state.id)} className="btn btn-dark">Reservations</button>
    
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
export default ViewPersonalInfoAccount;