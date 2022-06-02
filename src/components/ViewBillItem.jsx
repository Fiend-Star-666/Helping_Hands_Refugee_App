import React, { Component } from 'react';
import VehicleService from '../services/VehicleService';
import Spline from '@splinetool/react-spline';

class ViewBillItem extends Component{
    constructor(props){
        super(props) 
        this.state = {
            id: this.props.match.params.id, //vehicleReservation id
            Billitems: [],
            total: 0
        }
    }

    
    componentDidMount(){
        VehicleService.viewBillItemViaVReservation(this.state.id).then((res) => 
        { 
            this.setState({ Billitems: res.data});

        });
    }

     viewBill(id){
        this.props.history.push(`/vehiclereservation/viewbill/${id}`);
    }

    /*
id
click here to view all the detailed components
Total Amount
*/
render() {
        return (
        <div>
            <h2 className="text-center"> Bill Items of Vehicle Reservation:{this.state.id}  </h2>
                <div className= "row">
                
                </div>
                <br></br>

                <div className = "row" >
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                               
                                <th>ID</th>
                                
                                <th>Amount</th>
                                <th>Service</th>
                                <th>Cummulative Summation</th>

                            </tr>
                        </thead>
                        <tbody>
                            {       
                                this.state.Billitems.map(
                                    billitem =>
                                    <tr key = {billitem.id}>
                                        <td>    {billitem.id}      </td>
                                        <td>    {billitem.amount}      </td>
                                        <td>    {billitem.service}             </td>
                                        <td>{this.state.total+=billitem.amount}</td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            <div>  
            <h3 className="text-center"> Total amount of Bill:{this.state.total}  </h3>
                <button style={{marginLeft: "10px"}} onClick={ () => this.viewBill(this.state.id)} className="btn btn-info">View Bill</button>
            </div>
        </div>
        )
    }
    
}

export default ViewBillItem;



//                                   <button style={{marginLeft: "10px"}} onClick={ () => this.viewPersonalInfo(Account.id)} className="btn btn-info">Personal Profile</button>
     

/*



*/