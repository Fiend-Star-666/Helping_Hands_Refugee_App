import React, { Component } from 'react'
import VehicleService from '../services/VehicleService';

class ViewParkingStallComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            parkingStall: {}

        }

    }

    componentDidMount(){
        VehicleService.getParkingStallByVehicleId(this.state.id).then( (res) => 
        {    
            this.setState({parkingStall: res.data});
        });
    }
    

    render() {
        return (
        <div>
            <div className = "card col-md-6 offset-md-3">
                <h2 className="text-center">Parking Location:</h2>  

                <div className = "card-body">
                        <div className = "row">
                            <label> <b>Stall Number: </b>  </label>
                            <div>{this.state.parkingStall.stallNumber}</div>
                        </div>

                        <div className = "row">
                            <label> <b>Location ID:  </b> </label>
                            <div> { this.state.parkingStall.locationIdentifier }</div>
                        </div>
                </div>
            </div>

        </div>

        )
    }
}

export default ViewParkingStallComponent
