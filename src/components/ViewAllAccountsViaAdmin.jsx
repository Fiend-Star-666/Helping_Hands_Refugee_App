import React, { Component } from 'react';
import VehicleService from '../services/VehicleService';

class ViewAllAccountsViaAdmin extends Component{
    constructor(props){
        super(props) 
        this.state = {
            Accounts: []
        }
    }

    viewPersonalInfo(id){
        this.props.history.push(`/account/view/pinfo/${id}`);
    }
    viewVehicleReservations(id){
        this.props.history.push(`/vehiclereservation/account/view/${id}`);
    }

    componentDidMount(){
        VehicleService.getAllAccountsViaAdmin().then((res) => 
        { 
            this.setState({ Accounts: res.data});
        });
    }


    render() {
        return (
            <div>   
                <h2 className="text-center"> Account List:</h2>
                <div className= "row">
                
                </div>
                <br></br>

                <div className = "row" >
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ISActive?</th>
                                <th>ID</th>
                                <th>Account Status</th>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Security Clearance</th>
                                <th>Driver License</th>
                                <th>Driver License Expiry Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {       
                                this.state.Accounts.map(
                                    Account =>
                                    <tr key = {Account.id}>
                                        <td>    {String(Account.accActive)}   </td>
                                        <td>    {Account.id}                  </td>
                                        <td>    {Account.asstatus}            </td>
                                        <td>    {Account.person.name}         </td>
                                        <td>    {Account.person.email}        </td>
                                        <td>    {Account.securityRoles}       </td>
                                        <td>    {Account.driverLicenseNumber} </td>
                                        <td>    {Account.driverLicenseExpiry} </td>
                                    
                                        <td>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewPersonalInfo(Account.id)} className="btn btn-info">Personal Profile</button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewVehicleReservations(Account.id)} className="btn btn-dark">Reservations</button>

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

export default ViewAllAccountsViaAdmin;