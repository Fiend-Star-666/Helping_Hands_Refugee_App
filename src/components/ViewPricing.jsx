import React, { Component } from 'react';
//import car_fleet1 from '/Images/car_fleet1.jpeg'
// import '../css/bgPr.css';

class ViewPricing extends Component{

    render(){
        // const myStyle={
        //     backgroundImage:"url(/Images/pricing.jpg)",
        //     minHeight: '100%',
        //     position: 'relative',
        //     backgroundPosition: 'center',
        //     backgroundSize: 'cover',
        //     backgroundRepeat: 'no-repeat',
        //     backgroundAttachment: 'fixed',
        // };

/*
<div className = "row" style={{display: 'flex', justifyContent: 'center'}}>
                  <div className="col-4 d-flex justify-content-center text-center">
                    <table className="table table-striped table-bordered">
*/

     return(
        <div style={{  
                // backgroundImage:"url('/Images/pricing.jpg')",
                // //objectFit: 'cover',
                // width: '100vw',
                // height: '100%',
                // //position: 'fixed',
                // top: '0',
                // left: '0',
                // backgroundSize: 'cover',
                // backgroundRepeat: 'no-repeat',
                // backgroundAttachment: 'fixed',
                // backgroundPosition: 'fixed',
            }}> 
            <br></br>
            <br></br>
            <br></br>
            
                      

            <div className="container" >    
            <div className='card' style={{backgroundColor:'purple', boxShadow: '10px 10px' }}>
                <h2 style={{color:'white',textShadow: '1px 2px'}}>Vehicle Charges:</h2> 
            </div> 
                <table className="table table-striped table-bordered" >
                    <thead>
                        <tr>
                            <th>Vehicle Type</th>
                            <th>Prices/Day</th>
                    
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Car: Compact</td>
                            <td>₹ 900</td>
                        
                        </tr>
                        <tr>
                            <td>Car: Economy</td>
                            <td>₹ 1000</td>
                    
                        </tr>
                        <tr>
                            <td>Car: Standard</td>
                            <td>₹ 1750</td>
                        </tr>
                        <tr>
                            <td>Car: Full Size</td>
                            <td>₹ 3500</td>
                        </tr>
                        <tr>
                            <td>Car: Premium</td>
                            <td>₹ 4500</td>
                        </tr>
                        <tr>
                            <td>Car: Luxury</td>
                            <td>₹ 6000</td>
                        </tr>
                        <tr>
                            <td>Van: Cargo</td>
                            <td>₹ 2000</td>
                        </tr>
                        <tr>
                            <td>Van: Passenger</td>
                            <td>₹ 1500</td>
                        </tr>
                        <tr>
                            <td>Car: SUV</td>
                            <td>₹ 2800</td>
                        </tr>
                        <tr>
                            <td>Motorcycle</td>
                            <td>₹ 800</td>
                        </tr>
                        <tr>
                            <td>Truck</td>
                            <td>₹ 4000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br></br>
            <div className="container">
                <div className='card'  style={{backgroundColor:'purple', boxShadow: '10px 10px' }}>
                    <h2 style={{color:'white', textShadow: '1px 2px'}}>Optional Charges:</h2>
                </div>         
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Driver</td>
                            <td>₹ 1200/Day</td>
                            
                        </tr>
                        <tr>
                            <td>Roadside Assistance</td>
                            <td>₹ 500</td>
                            
                        </tr>
                        <tr>
                            <td>Wifi</td>
                            <td>₹ 100/Day</td>
                        
                        </tr>
                        <tr>
                            <td>Navigation</td>
                            <td>₹ 300</td>
                        
                        </tr>

                        <tr>
                            <td>Child Seat</td>
                            <td>₹ 600</td>
                        </tr>
                        <tr>
                            <td>Ski Rack</td>
                            <td>₹ 1000</td>
                        </tr>
                        <tr>
                            <td>Personal Insurance</td>
                            <td>₹ 1250</td>
                        </tr>
                        <tr>
                            <td>Belongings Insurance</td>
                            <td>₹ 5000</td>
                        </tr>
                        <tr>
                            <td>Liability Insurance</td>
                            <td>₹ 1250</td>
                        </tr>
                        <tr>
                            <td>Additional Driver</td> 
                            <td>₹ 2000/Day</td>
                        </tr>
                    </tbody>
            
                </table>
            </div>
        <br></br>
        </div>


     ); 
    }

}

export default ViewPricing;