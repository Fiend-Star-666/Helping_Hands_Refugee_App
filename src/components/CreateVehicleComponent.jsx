import React, { Component } from 'react';
import VehicleService from '../services/VehicleService';

class CreateVehicleComponent extends Component {

    constructor(props){
        super(props)

        this.state = {

           vtype:'',
           id: this.props.match.params.id,
           numberPlate: '',
           stockNumber: '',
           passengerCapacity: '',
           hasSunroof: '',
           model: '',
           make: '',
           manufacturingYear: '',
           mileage: '',
           barcode: '',
           selectedStatus: '',
           status: '',
           selectedCRLocation: [],
           carRentalLocation: '',
           
          // vehiclereservation: null,
           type: '',
           statuus: [],
          // vehicle_log: null,
           parkingstall: '',
           stallNumber: '',
           locationIdentifier: ''

        }

          this.changeVTypeHandler=this.changeVTypeHandler.bind(this);

          this.changeNumberPlateHandler = this.changeNumberPlateHandler.bind(this);
          this.changeStockNumberHandler = this.changeStockNumberHandler.bind(this);
          this.changePassengerCapacityHandler = this.changePassengerCapacityHandler.bind(this);
          this.changeHasSunroofHandler = this.changeHasSunroofHandler.bind(this);
          this.changeModelHandler = this.changeModelHandler.bind(this);
          this.changeMakeHandler = this.changeMakeHandler.bind(this);
          this.changeManufacturingYearHandler = this.changeManufacturingYearHandler.bind(this);
          this.changeMileageHandler = this.changeMileageHandler.bind(this);
          this.changeBarcodeHandler = this.changeBarcodeHandler.bind(this);
          this.changeStatusHandler = this.changeStatusHandler.bind(this);
          
          this.changeCarRentalLocationHandler = this.changeCarRentalLocationHandler.bind(this);
          this.changeVehicleLogHandler = this.changeVehicleLogHandler.bind(this);
          this.changeVehicleReservationHandler = this.changeVehicleReservationHandler.bind(this);
          
          
          this.changeParkingStallHandler = this.changeParkingStallHandler.bind(this);
          this.changeStallNumberHandler = this.changeStallNumberHandler.bind(this);          
          this.changeLocationIdentifierHandler = this.changeLocationIdentifierHandler.bind(this);          

          




          this.changeTypeHandler = this.changeTypeHandler.bind(this);
         
          this.saveVehicle = this.saveVehicle.bind(this); 
    }

    componentDidMount(){
        
        VehicleService.getCRLocation().then((res) =>
        {   
            res.data.forEach(element => {
                this.state.selectedCRLocation.push(element.name);
            })       
        })
    }

    saveVehicle = (e) => {

        e.preventDefault();
        let vehicle = {
                       vtype: this.state.vtype, numberPlate: this.state.numberPlate, stockNumber: this.state.stockNumber, passengerCapacity: this.state.passengerCapacity, 
                       barcode: this.state.barcode, hasSunroof: this.state.hasSunroof, status: this.state.status, model: this.state.model, make: this.state.make, 
                       manufacturingYear: this.state.manufacturingYear, mileage: this.state.mileage, carRentalLocation: this.state.carRentalLocation, vehicle_log: this.state.vehicle_log, 
                       vehiclereservation: this.state.vehiclereservation, parkingstall: this.state.parkingstall, type: this.state.type, stallNumber: this.state.stallNumber, locationIdentifier: this.state.locationIdentifier
                    };
        
        console.log('vehicle=> ' + JSON.stringify(vehicle));

        
        VehicleService.createVehicle(vehicle).then(res => {
                this.props.history.push('/vehicle/add');
        });
    }

    changeStallNumberHandler = (event) => {
        this.setState({stallNumber: event.target.value});
    }

    changeLocationIdentifierHandler = (event) => {
        this.setState({locationIdentifier: event.target.value});
    }
   
    changeVTypeHandler = (event) => {
        this.setState({vtype: event.target.value});
    }

     
    changeNumberPlateHandler = (event) => {
        this.setState({numberPlate: event.target.value});
    }

    changeStockNumberHandler = (event) =>{
        this.setState({stockNumber:event.target.value})
    }
    
    changePassengerCapacityHandler = (event) =>{
        this.setState({passengerCapacity:event.target.value})
    }
    
    changeMileageHandler = (event) => {
        this.setState({mileage: event.target.value});
    }
   
    changeManufacturingYearHandler = (event) => {
        this.setState({manufacturingYear: event.target.value});
    }
            
    changeMakeHandler = (event) => {
        this.setState({make: event.target.value});
    }
    
    changeModelHandler = (event) => {
        this.setState({model: event.target.value});
    }
    
    changeStatusHandler = (event) => {
        this.setState({status: event.target.value});
    }
    
    changeHasSunroofHandler = (event) => {
        this.setState({hasSunroof: event.target.value});
    }
    
    changeBarcodeHandler = (event) => {
        this.setState({barcode: event.target.value});
    }

    changeTypeHandler = (event) => {
        this.setState({type: event.target.value});
    }

    changeCarRentalLocationHandler = (event) => {
        this.setState({carRentalLocation: event.target.value});
    }

    changeVehicleLogHandler = (event) => {
        this.setState({vehicle_log: event.target.value});
    }


    changeVehicleReservationHandler = (event) => {
        this.setState({vehiclereservation: event.target.value});
    }


    changeParkingStallHandler = (event) => {
        this.setState({parkingstall: event.target.value});
    }

    cancel() {
        this.props.history.push('/vehicle/add');
    }

    render() {
        let elementl;
           
        
        if(this.state.vtype!='Car'&&this.state.vtype!='Van'&&this.state.vtype!='')
        {
            elementl = (<input placeholder="Type" name="type" className="form-control" value={this.state.type} onChange={this.changeTypeHandler} />);
            //return elementl;
        }

        

        if(this.state.vtype=='Car'){
            elementl=(            
            <div>
                <label>Car Type:</label>
            <div>
                <select placeholder="Car Type" value={this.state.type} onChange={this.changeTypeHandler}>
                    <option>--Choose Car Type--</option>
                        <option value='Economy'>{'Economy'}</option>,
                        <option value='Compact'>{'Compact'}</option>,
                        <option value='Intermediate'>{'Intermediate'}</option>,
                        <option value='Standard'>{'Standard'}</option>,
                        <option value='FullSize'>{'FullSize'}</option>,
                        <option value='Luxury'>{'Luxury'}</option>,
                        <option value='Premium'>{'Premium'}</option>
                </select>
            </div>
            </div>
            );
        }

        let pstall_stallNumber;
        let pstall_Locationid;
        
        if(this.state.parkingstall=="Add a Value"){
            pstall_stallNumber=(
                <div className = "form-group">
                                            <label > Stall Number: </label>
                                            <input placeholder="Stall Number" name="stallNumber" className="form-control" 
                                                 value={this.state.stallNumber} onChange={this.changeStallNumberHandler} />
                                        </div>
                );

                pstall_Locationid=(
                <div className = "form-group">
                                            <label > Location Identifier: </label>
                                            <input placeholder="Location Identifier" name="locationIdentifier" className="form-control" 
                                                 value={this.state.locationIdentifier} onChange={this.changeLocationIdentifierHandler} />
                                        </div>
            );
        }

        if(this.state.vtype=='Van'){
            elementl=(            
            <div>
                <label>Van Type:</label>
             <div>
                <select placeholder="Van Type" value={this.state.type} onChange={this.changeTypeHandler}>
                    <option>--Choose Van Type--</option>
                        <option value='Passenger'>{'Passenger'}</option>,
                        <option value='Cargo'>{'Cargo'}</option>
                </select>
            </div>
            </div>
            );
        }

        return (
            <div>
                <br></br>
                   <div className="container">
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">  Add Vehicle </h3>
                                <div className = "card-body"  >
                                    <form>                      

                                    <div className = "form-group">
                        					<label>Vehicle Type:</label>
                                            <div>
					                        <select placeholder="Vehicle Type" value={this.state.vtype} onChange={this.changeVTypeHandler}>
						                        <option>--Choose Vehicle Type--</option>
		                                            <option value='Car'>{'Car'}</option>,
                                                    <option value='Truck'>{'Truck'}</option>,
                                                    <option value='SUV'>{'SUV'}</option>,
                                                    <option value='Van'>{'Van'}</option>,
                                                    <option value='Motorcycle'>{'Motorcycle'}</option>,
					                        </select>
                                            </div>
				                        </div>




                                        <div className = "form-group">
                                            <label > Number Plate: </label>
                                            <input placeholder="Number Plate" name="numberPlate" className="form-control" 
                                                 value={this.state.numberPlate} onChange={this.changeNumberPlateHandler} />
                                        </div>

                                        <div className = "form-group">
                                            <label > Stock Number: </label>
                                            <input placeholder="Stock Number" name="stockNumber" className="form-control" 
                                                 value={this.state.stockNumber} onChange={this.changeStockNumberHandler} />
                                        </div>

                                        <div className = "form-group">
                                            <label > Passenger capacity: </label>
                                            <input placeholder="Passenger Capacity" name="passengerCapacity" className="form-control" 
                                                 value={this.state.passengerCapacity} onChange={this.changePassengerCapacityHandler} />
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label > HasSunroof: </label>
                                            <input placeholder="HasSunroof" name="hasSunroof" className="form-control" 
                                                 value={this.state.hasSunroof} onChange={this.changeHasSunroofHandler} />
                                        </div>

                                        <div className = "form-group">
                                            <label > Model: </label>
                                            <input placeholder="Model" name="model" className="form-control" 
                                                 value={this.state.model} onChange={this.changeModelHandler} />
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label > Make: </label>
                                            <input placeholder="Make" name="make" className="form-control" 
                                                 value={this.state.make} onChange={this.changeMakeHandler} />
                                        </div>

                                        <div className = "form-group">
                                            <label > Manufacturing Year: </label>
                                            <input placeholder="Manufacturing Year" name="manufacturingYear" className="form-control" 
                                                 value={this.state.manufacturingYear} onChange={this.changeManufacturingYearHandler} />
                                        </div>

                                        <div className = "form-group">
                                            <label > Mileage: </label>
                                            <input placeholder="Mileage" name="mileage" className="form-control" 
                                                 value={this.state.mileage} onChange={this.changeMileageHandler} />
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label > Barcode: </label>
                                            <input placeholder="Barcode" name="barcode" className="form-control" 
                                                 value={this.state.barcode} onChange={this.changeBarcodeHandler} />
                                        </div>

                                        <div>
                        					<label>Status:</label>
                                            <div>
					                        <select placeholder="Status" value={this.state.status} onChange={this.changeStatusHandler}>
						                        <option>--Choose Status--</option>
		                                            <option value='Available'>{'Available'}</option>,
                                                    <option value='Reserved'>{'Reserved'}</option>,
                                                    <option value='Loaned'>{'Loaned'}</option>,
                                                    <option value='Lost'>{'Lost'}</option>,
                                                    <option value='BeingServiced'>{'BeingServiced'}</option>,
                                                    <option value='Other'>{'Other'}</option>
					                        </select>
                                            </div>
                                        </div>
                                        <br></br>

                                        <div className = "form-group">
                                            <label > Type: </label>
                                            {elementl}
                                           
                                        </div>

                                        
    
                                        <div>
                        					<label>Car Rental Location:</label>
					                        <div>
                                            <select placeholder="Car Rental Location" value={this.state.carRentalLocation} onChange={this.changeCarRentalLocationHandler}>
						                        <option>--Choose Location--</option>
		                                            {
                                                        this.state.selectedCRLocation.map(element =>{
                                                          return  (<option key={element} value={element}>{element}</option>);
                                                        })
                                                    }
					                        </select>
                                            </div>
                                        </div>
                                        <br></br>

                                        <div className = "form-group">
                        					<label>Parking Stall:</label>
                                            <div>
					                        <select placeholder="Parking Stall" value={this.state.parkingstall} onChange={this.changeParkingStallHandler}>
						                        <option>--Choose to Add Parking Stall--</option>
		                                            <option value='None'>{'None'}</option>,
                                                    <option value='Add a Value'>{'Add a Value'}</option>
					                        </select>
                                            </div>
				                        </div>
                                        {pstall_stallNumber}
                                        {pstall_Locationid}                                       

                                            <button className="btn btn-success" onClick={this.saveVehicle}>Save</button>
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

export default CreateVehicleComponent;
