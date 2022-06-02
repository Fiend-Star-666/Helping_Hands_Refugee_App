import React, { Component } from 'react';
import VehicleService from '../services/VehicleService';

class ViewCRSystemComponent extends Component{

    constructor(props){
        super(props) 
        this.state = {
            crSystems: []
        }

    }


    viewCRLocationsOfSystem(id){
        this.props.history.push(`/carrentallocations/view`);
    }
 
    componentDidMount(){
        VehicleService.getCRSystem().then((res) => 
        { 
            this.setState({ crSystems: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center"> Car Rental Systems:  </h2>
                <div className= "row">
                
                </div>
                <br></br>

                <div className = "row" >
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {       
                                this.state.crSystems.map(
                                    crSystem =>
                                    <tr key = {crSystem.id}>
                                        <td>    {crSystem.id}        </td>
                                        <td>    {crSystem.name}      </td>
                                        
                                        <td>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewCRLocationsOfSystem(crSystem.id)} className="btn btn-info">View Car Rental Locations</button>
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

export default ViewCRSystemComponent;