import React, { Component } from 'react'
import VehicleService from '../services/VehicleService';

class ViewCRLocationForVehicleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            carRentalLocation: {},
            Location: {
                streetAddress: '',
                city: '',
                zipcode: '',
                state: '',
                country: ''
            }
            }
    }

    componentDidMount(){
        VehicleService.getCRLocationForAVehicle(this.state.id).then( (res) => 
        {    
            this.setState({carRentalLocation: res.data});
            if(this.state.carRentalLocation.address==null){
                this.setState({Location: {
                    streetAddress: " does not exist",
                    city: " does not exist",
                    zipcode: " does not exist",
                    state: " does not exist",
                    country: " does not exist"
                    
                }});
            }
            else{
                this.setState({Location: this.state.carRentalLocation.address});
            }
        });
    }

    
    render() {
        return (
        <div>
            <div className = "card col-md-6 offset-md-3">
                <h2 className="text-center">Car Rental Location for Vehicle:{this.state.id}</h2>  
                <div className = "card-body">
                        <div className = "row">
                            <label> <b>Name:  </b> </label>
                            <div> { this.state.carRentalLocation.name }</div>
                        </div>
                        
                        <div className = "row">
                            <label> <b>Street Address: </b> </label>
                            <div>{this.state.Location.streetAddress}</div>
                        </div>

                        <div className = "row">
                            <label> <b>Zipcode: </b> </label>
                            <div>{this.state.Location.zipcode}</div>
                        </div>

                        <div className = "row">
                            <label> <b>City: </b> </label>
                            <div>{this.state.Location.city}</div>
                        </div>

                        <div className = "row">
                            <label> <b>State: </b> </label>
                            <div>{this.state.Location.state}</div>
                        </div>

                        <div className = "row">
                            <label> <b>Country: </b> </label>
                            <div>{this.state.Location.country}</div>
                        </div>
                        
                        
                </div>
            </div>
        </div>
        )
    }
}

export default ViewCRLocationForVehicleComponent