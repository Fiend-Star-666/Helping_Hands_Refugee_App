import React, { Component , useState } from 'react';
import DatePicker from 'react-datepicker';  
   
import "react-datepicker/dist/react-datepicker.css";  
/*

class CreateAccountMember extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,

            password: '',

            accActive: 'true',//dropdown if possible
            securityRoles: 'ROLE_USER',
            asstatus:'',//dropdown is must due to enum
            

            vehicle: null,
            vehiclereservation:null,
            driverLicenseNumber: '',
            driverLicenseExpiry: new Date(),

            person: {
                email: '',
                name: '',
                phone: '',
                address: {
                    streetAddress: '',
                    city: '',
                    state: '',
                    zipcode: '',
                    country: ''
                }
            }
        }


        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeDriverLicenseNumberHandler = this.changeDriverLicenseNumberHandler.bind(this);
        this.changeDriverLicenseExpiryHandler = this.changeDriverLicenseExpiryHandler.bind(this);
        
        this.changePersonHandler = this.changePersonHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);

        this.changeAsstatusHandler = this.changeAsstatusHandler.bind(this);
     

        this.saveMemberAccount = this.saveMemberAccount.bind(this); 
    }

    
    saveMemberAccount = (e) => {
        e.preventDefault();

        let account = {email: this.state.person.email, password: this.state.password, name: this.state.person.name, 
                       accActive: this.state.accActive, securityRoles: this.state.securityRoles, asstatus: this.state.asstatus, phone: this.state.person.phone, streetAddress: this.state.person.address.streetAddress, 
                       zipcode: this.state.person.address.zipcode, city: this.state.person.address.city, state: this.state.person.address.state, country: this.state.person.address.country, 
                       driverLicenseNumber: this.state.driverLicenseNumber, driverLicenseExpiry: this.state.driverLicenseExpiry,vehiclereservation: this.state.vehiclereservation, vehicle: this.state.vehicle};
        
                       console.log('account=> ' + JSON.stringify(account));

        VehicleService.createMemberAccount(account).then( res => {
                this.props.history.push('/account/register/member');
        }).catch(function (error){
            alert('Please Check your Details or An account with Same details already exists');
          });
    }
    
    
    changePersonHandler = (event) => {
        let person=this.state.person;
        person[event.target.name]=event.target.value;
        this.setState({person});   
    } 

    changeAddressHandler = (event) => {
        let address=this.state.person.address;
        address[event.target.name]=event.target.value;

        this.setState({address});  

    } 
    
    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});

    }

    changeDriverLicenseNumberHandler = (event) => {
        this.setState({driverLicenseNumber: event.target.value});
    }
    
     changeDriverLicenseExpiryHandler(date) {  
        this.setState({  
        driverLicenseExpiry: date  
        })  
    } 

    changeAsstatusHandler = (event)=>{
        this.setState({asstatus: event.target.value});
    } 

    cancel() {
        this.props.history.push('/account/register/member');
    }

   

    render() {

        return (
            
            <div style={{backgroundColor: ''}}>
                <br></br>
                   <div className="container">
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">  Register Member Account:</h3>
                                <div className = "card-body">
                                    <form>                      
                                        <div className = "form-group">
                                            <label > Email ID: </label>
                                            <input placeholder="Email Id" name="email" className="form-control" 
                                                 value={this.state.person.email} onChange={this.changePersonHandler} />
                                        </div>

                                        <div className = "form-group">
                                            <label > Password: </label>
                                            <input placeholder="Password" name="password" className="form-control" 
                                                 value={this.state.password} onChange={this.changePasswordHandler} />
                                        </div>

                                        <div className = "form-group">
                                            <label > Name: </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                 value={this.state.person.name} onChange={this.changePersonHandler} />
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label > Phone Number: </label>
                                            <input placeholder="Phone Number" name="phone" className="form-control" 
                                                 value={this.state.person.phone} onChange={this.changePersonHandler} />
                                        </div>

                                        <div className = "form-group">
                                            <label > Street Address: </label>
                                            <input placeholder="Street Address" name="streetAddress" className="form-control" 
                                                 value={this.state.person.address.streetAddress} onChange={this.changeAddressHandler} />
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label > Pincode: </label>
                                            <input placeholder="Pincode" name="zipcode" className="form-control" 
                                                 value={this.state.person.address.zipcode} onChange={this.changeAddressHandler} />
                                        </div>

                                        <div className = "form-group">
                                            <label > City: </label>
                                            <input placeholder="City" name="city" className="form-control" 
                                                 value={this.state.person.address.city} onChange={this.changeAddressHandler} />
                                        </div>

                                        <div className = "form-group">
                                            <label > State: </label>
                                            <input placeholder="State" name="state" className="form-control" 
                                                 value={this.state.person.address.state} onChange={this.changeAddressHandler} />
                                        </div>

                                        <div className = "form-group">
                                            <label > Country: </label>
                                            <input placeholder="Country" name="country" className="form-control" 
                                                 value={this.state.person.address.country} onChange={this.changeAddressHandler} />
                                        </div>

                                        <div className = "form-group">
                                            <label > Driver License: </label>
                                            <input placeholder="Driver License" name="driverLicenseNumber" className="form-control" 
                                                 value={this.state.driverLicenseNumber} onChange={this.changeDriverLicenseNumberHandler} />
                                        </div>

                                            
                                        <label > Driver License Expiry: </label>
                                     
                                        <div className="form-group">  
                                            <DatePicker  
                                                selected={ this.state.driverLicenseExpiry }  
                                                onChange={ this.changeDriverLicenseExpiryHandler }  
                                                name="startDate"  
                                                dateFormat="dd/MM/yyyy"  
                                            />  
                                        </div>

                                         <div>
                        					<label>Account Status:</label>
					                        <div>
                                                <select placeholder="Account Status" value={this.state.status} onChange={this.changeStatusHandler}>
						                        <option>--Choose Status--</option>
		                                            <option value='Active'>{'Active'}</option>,
                                                    <option value='Closed'>{'Closed'}</option>,
                                                    <option value='Cancelled'>{'Cancelled'}</option>,
                                                    <option value='Blacklisted'>{'Blacklisted'}</option>,
                                                    <option value='None'>{'None'}</option>,
					                        </select>
                                            </div>
                                        </div>
            <br></br>
                                       

                                            <button className="btn btn-success" onClick={this.saveMemberAccount}>Save</button>
                                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>

                            </div>

                        </div>

                    </div>
            </div>
        );
    }    

}

export default CreateAccountMember;

*/