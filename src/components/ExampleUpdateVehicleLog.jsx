import React, { Component } from 'react';
import VehicleService from '../services/VehicleService';
import "react-datepicker/dist/react-datepicker.css";  
import DatePicker from "react-datepicker";  
import {withRouter} from 'react-router-dom';
import { parseISO, parseJSON } from 'date-fns';


/*
class UpdateVehicleLog extends Component {

    constructor(props){
        super(props)
        this.state = {            
           vehicleLogId: this.props.match.params.id,
           type:'',
           description:'',
           creationDate: new Date(),
           vehicleLogData:[]
        }

        this.changeTypeHandler=this.changeTypeHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeCreationDateHandler = this.changeCreationDateHandler.bind(this);
          
    }

    componentDidMount(){
            VehicleService.getVehicleLogByVehicleLogId(this.state.vehicleLogId).then( (res) => 
            {    
                this.setState({type: res.data.type});
                
                this.setState({description: res.data.description});
                console.log(res.data.creationDate);
                this.setState({creationDate: parseJSON(res.data.creationDate)});
                console.log(this.state.creationDate);
    });
    }


    updateVehicleLog = (e) => {

        e.preventDefault();
        let vehicleLog = {  
                    vehicleLogId: this.state.vehicleLogId, type: this.state.type, creationDate: this.state.creationDate, description: this.state.description
                    };
        
        console.log('vehicleLog=> ' + JSON.stringify(vehicleLog));
                    
        
        //ek nya bnao idhr
        // /updateVehicleLog/{id}
        VehicleService.updateVehicleLogById(vehicleLog,this.state.vehicleLogId).then(res => {
                this.props.history.push('/vehicle/view');
        });
    }
    
   
    changeTypeHandler = (event) =>{
        this.setState({type: event.target.value})
    }

     
    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }

    changeCreationDateHandler(date) {  
        this.setState({  
            creationDate: date  
        })  
    } 
    render(){            
        return (
            <div>
                <br></br>
                   <div className="container">
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">  Vehicle Log of Vehicle id: {this.state.vehicleLogId}</h3>
                                <div className = "card-body"  >
                                    <form>                      

                                    <div>
                        					<label>Vehicle Log Type:</label>
					                        <select placeholder="Vehicle Log Type"  value={this.state.type} onChange={this.changeTypeHandler}>
                                                
						                        <option>--Choose Vehicle Log Type--</option>
		                                            <option value='Accident'>{'Accident'}</option>,
                                                    <option value='Refueling'>{'Refueling'}</option>,
                                                    <option value='CleaningService'>{'Cleaning Service'}</option>,
                                                    <option value='OilChange'>{'Oil Change'}</option>,
                                                    <option value='Repair'>{'Repair'}</option>,
                                                    <option value='Other'>{'Other'}</option>
					                        </select>
				                        </div>

                                        <div className = "form-group">
                                            <label > Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                 value={this.state.description} onChange={this.changeDescriptionHandler} />
                                        </div>

                                        <div className="form-group">  
                                            <DatePicker selected={ this.state.creationDate }  onChange={ this.changeCreationDateHandler }  
                                                name="startDate"  dateFormat="dd/MM/yyyy" />  
                                        </div>             
                                            <button className="btn btn-success" onClick={this.updateVehicleLog}>Update Vehicle log</button>
                                    </form>
                                </div>

                            </div>

                        </div>

                    </div>
            </div>
        );
    }
}

export default UpdateVehicleLog;
*/