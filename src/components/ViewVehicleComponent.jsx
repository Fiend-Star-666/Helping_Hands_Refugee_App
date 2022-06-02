import React, { Component } from 'react'
import VehicleService from '../services/VehicleService';

class ViewVehicleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            vehicle: {}
        }
    }

    componentDidMount(){
        VehicleService.getVehicleById(this.state.id).then( res => {
            this.setState({vehicle: res.data});
        });
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Individual Vehicle Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> <b>Id: </b>  </label>
                            <div>{this.state.vehicle.id}</div>
                        </div>

                        <div className = "row">
                            <label> <b>License Plate Number:  </b> </label>
                            <div> { this.state.vehicle.numberPlate }</div>
                        </div>
                        
                        <div className = "row">
                            <label> <b>Stock Number:  </b> </label>
                            <div> { this.state.vehicle.stockNumber }</div>
                        </div>
                        
                        <div className = "row">
                            <label> <b>Passenger Capacity:  </b> </label>
                            <div> { this.state.vehicle.passengerCapacity }</div>
                        </div>
                        
                        <div className = "row">
                            <label> <b>Has Sunroof:  </b> </label>
                            <div> { String(this.state.vehicle.hasSunroof) }</div>
                        </div>
                        
                        <div className = "row">
                            <label> <b>Model:  </b> </label>
                            <div> { this.state.vehicle.model }</div>
                        </div>
                        
                        <div className = "row">
                            <label> <b>Make:  </b> </label>
                            <div> { this.state.vehicle.make }</div>
                        </div>
                        
                        <div className = "row">
                            <label> <b>Manufacturing Year:  </b> </label>
                            <div> { this.state.vehicle.manufacturingYear }</div>
                        </div>
                        
                        <div className = "row">
                            <label> <b>Mileage(in Km/L):  </b> </label>
                            <div> { this.state.vehicle.mileage }</div>
                        </div>
                        
                        <div className = "row">
                            <label> <b>Barcode:  </b> </label>
                            <div> { this.state.vehicle.barcode }</div>
                        </div>
                        
                        <div className = "row">
                            <label> <b>Status:  </b> </label>
                            <div> { this.state.vehicle.status }</div>
                        </div>

                        <div className = "row">
                            <label> <b>Type of Vehicle:  </b> </label>
                            <div> { this.state.vehicle.type}</div>
                        </div>
                        
                        <div className="row">
                            <div><a href={"/logs/vehicle/view/"+this.state.vehicle.id}>Vehicle Logs</a></div>                        
                        </div>  

                        <div className="row">
                            <div><a href={"/parkingstall/vehicle/view/"+this.state.vehicle.id}>Click here to view Parking Location of the Vehicle</a></div>                        
                        </div>

                    </div>

                </div>
            </div>
        
     )
        
    }
}

export default ViewVehicleComponent


/*
                        <div className="row">
                            <label><b>Click here to view Vehicle Log</b></label>
                            <div></div>                        
                        </div>


                        <div className = "row">
                            <label> <b>Car Rental Location  </b> </label>
                            <div> { this.state.vehicle.carRentalLocation }</div>
                        </div>

                        <div className = "row">
                            <label> <b>Car Rental Location  </b> </label>
                            <div> { this.state.vehicle.carRentalLocation }</div>
                        </div>
                        
                        <div className = "row">
                            <label> <b>Vehicle Log:  </b> </label>
                            <div> { this.state.vehicle.vehicle_log }</div>
                        </div>

                        <div className = "row">
                            <label> <b>Vehicle Reservation:  </b> </label>
                            <div> { this.state.vehicle.vehiclereservation}</div>
                        </div>
                    
                        <div className = "row">
                            <label> <b>Parking Stall:  </b> </label>
                            <div> { this.state.vehicle.parkingstall}</div>
                        </div>

/*
<label> <b>Vehicle Type: </b>  </label>
<div> { this.state.vehicle.dtype }</div>
</div>
<div className = "row">
<label> <b>License Plate Number:  </b> </label>
<div> { this.state.vehicle.licenseNumber }</div>
</div>
<div className = "row">
<label> <b> Stock Number: </b>   </label>
<div> {   this.state.vehicle.stockNumber }</div>
</div>
<div className = "row">
<label> <b> Passenger Capacity: </b>   </label>
<div> {   this.state.vehicle.passengerCapacity }</div>
</div>
<div className = "row">
<label> <b> Barcode: </b>   </label>
<div> {   this.state.vehicle.barcode }</div>
</div>
<div className = "row">
<label> <b> Status: </b>   </label>
<div> {   this.state.vehicle.status }</div>
</div>
<div className = "row">
<label> <b> Sunroof: </b>   </label>
<div> {   this.state.vehicle.hasSunroof }</div>
</div>
<div className = "row">
<label> <b> Model: </b>   </label>
<div> {   this.state.vehicle.model }</div>
</div>
<div className = "row">
<label> <b> Make: </b>   </label>
<div> {   this.state.vehicle.make }</div>
</div>
<div className = "row">
<label> <b> manufacturingYear: </b>   </label>
<div> {   this.state.vehicle.manufacturingYear }</div>
</div>
<div className = "row">
<label> <b> Mileage: </b>   </label>
<div> {   this.state.vehicle.mileage }</div>
</div>
<div className = "row">
<label> <b> Type: </b>   </label>
<div> {   this.state.vehicle.type }</div>
*/



/*
{
    "carRentalLocation": {
        "id": 4,
        "name": "Random59",
        "address": {
            "streetAddress": "Mall Road",
            "city": "New Delhi",
            "state": "Delhi",
            "zipcode": "110076",
            "country": "India"
        }
    },
    "vehicle_log": [],
    "vehiclereservation": [],
    "parkingstall": {
        "id": 4,
        "stallNumber": "49",
        "locationIdentifier": "AG34"
    },
    "type": "Economy"
}*/