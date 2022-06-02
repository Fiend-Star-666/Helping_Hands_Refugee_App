import React, { Component } from 'react';
import VehicleService from '../services/VehicleService';


class CreateCRLocation extends Component {
    constructor(props){
        super(props)
        this.state={
//            id:this.props.match.params.id,
            
            name: '',

            //carRentalSystem

            address: {
                streetAddress: '',
                city: '',
                state: '',
                zipcode: '',
                country: ''
                }
            
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        
        this.changeAddressHandler = this.changeAddressHandler.bind(this);

        this.saveCRLocation = this.saveCRLocation.bind(this); 
    }

    saveCRLocation = (e) => {
        e.preventDefault();

        let crLocation = {name: this.state.name, streetAddress: this.state.address.streetAddress, 
                          zipcode: this.state.address.zipcode, city: this.state.address.city, state: this.state.address.state, country: this.state.address.country, 
                        };
        
                       console.log('crLocation=> ' + JSON.stringify(crLocation));

        /*Navigate List page of the */
        VehicleService.createCRLocation(crLocation).then( res => {
                this.props.history.push('/admin/carrentallocation/add');
        });
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }


    changeAddressHandler = (event) => {
        let address=this.state.address;
        address[event.target.name]=event.target.value;

        this.setState({address});  

    } 

    cancel() {
        this.props.history.push('/admin/carrentallocation/add');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className="container">
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">  Add Car Rental Location Account:</h3>
                                <div className = "card-body">
                                    <form>                      
                                        <div className = "form-group">
                                            <label > Name: </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                 value={this.state.name} onChange={this.changeNameHandler} />
                                        </div>

                                        <div className = "form-group">
                                            <label > Street Address: </label>
                                            <input placeholder="Street Address" name="streetAddress" className="form-control" 
                                                 value={this.state.address.streetAddress} onChange={this.changeAddressHandler} />
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label > Pincode: </label>
                                            <input placeholder="Pincode" name="zipcode" className="form-control" 
                                                 value={this.state.address.zipcode} onChange={this.changeAddressHandler} />
                                        </div>

                                        <div className = "form-group">
                                            <label > City: </label>
                                            <input placeholder="City" name="city" className="form-control" 
                                                 value={this.state.address.city} onChange={this.changeAddressHandler} />
                                        </div>

                                        <div className = "form-group">
                                            <label > State: </label>
                                            <input placeholder="State" name="state" className="form-control" 
                                                 value={this.state.address.state} onChange={this.changeAddressHandler} />
                                        </div>

                                        <div className = "form-group">
                                            <label > Country: </label>
                                            <input placeholder="Country" name="country" className="form-control" 
                                                 value={this.state.address.country} onChange={this.changeAddressHandler} />
                                        </div>


                                            <button className="btn btn-success" onClick={this.saveCRLocation}>Save</button>
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

export default CreateCRLocation;

