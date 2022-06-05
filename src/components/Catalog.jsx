
import React, {Component}from 'react';



class Catalog extends Component{

     

    render(){
        return(
           
            <div >
            
            <br></br>
            <br></br>
            <h1 style={{textShadow: '2px 2px'}}>Vehicle Catalog :</h1>
            <br></br>
            <br></br>
                <div className="row">
                  <div className="col-md-4">
                    <div className='card'>
                    <div className="container" style={{boxShadow: '8px 8px'}}>
                        <img src="./Images/car1.jpeg" className="card-img-top" alt="..." style={{height: '250px'}}/>  
                        <div className="card-body">
                             <h5 className="card-title">Hyundai Verna</h5>
                             <p className="card-text">Price: ₹ 3500/Day </p>
                            <a href="#" className="btn btn-primary">More Info</a>
                        </div>
                        </div>
                     </div>
                     <br></br>
                    </div>
                <div className="col-md-4">
                    <div className='card' style={{boxShadow: '8px 8px'}}>
                        <div className="container">
                            <img src="./Images/car2.jpeg" className="card-img-top" alt="..." style={{height: '250px'}}/>  
                            <div className="card-body">
                                <h5 className="card-title">Bajaj Pulsar 150</h5>
                                <p className="card-text">Price: ₹ 800/Day</p>
                                 <a href="#" className="btn btn-primary">More Info</a>
                            </div>
                            </div>
                        </div>
                        <br></br>
                    </div>

                    <div className="col-md-4">
                        <div className='card' style={{boxShadow: '8px 8px'}}>
                        <div className="container" >
                            <img src="./Images/car3.jpeg" className="card-img-top" alt="..." style={{height: '250px'}}/>  
                            <div className="card-body">
                                <h5 className="card-title">Maruti Suzuki Omni</h5>
                                <p className="card-text">Price: ₹ 1500/Day</p>
                                 <a href="#" className="btn btn-primary">More Info</a>
                            </div>
                            </div>
                            </div>
                        </div>
                        <br></br>
                </div>    
              
                <div className="row">
                  <div className="col-md-4">
                    <div className="card" style={{boxShadow: '8px 8px'}}>
                        <div className='container'>
                        <img src="./Images/car4.jpeg" className="card-img-top" alt="..." style={{height: '250px'}}/>  
                       
                        <div className="card-body">
                             <h5 className="card-title">Skoda Slavia</h5>
                             <p className="card-text">"Price: ₹ 3500/Day</p>
                            <a href="#" className="btn btn-primary">More Info</a>
                        </div>
                        </div> 
                     </div>
                     <br></br>
                    </div>

                <div className="col-md-4">
                        <div className="card" style={{boxShadow: '8px 8px'}}>
                        <div className='container'>
                            <img src="./Images/car5.jpeg" className="card-img-top" alt="..." style={{height: '250px'}}/>  
                            <div className="card-body">
                                <h5 className="card-title">Maruti Suzuki Ciaz</h5>
                                <p className="card-text">Price: ₹ 3500/Day</p>
                                 <a href="#" className="btn btn-primary">More Info</a>
                            </div>
                            </div>
                        </div>
                    </div>
                
                <div className="col-md-4" >
                        <div className="card" style={{boxShadow: '8px 8px'}}>
                            <div className='container'>
                            <img src="./Images/car6.jpeg" className="card-img-top" alt="..." style={{height: '250px'}}/>  
                            <div className="card-body">
                                <h5 className="card-title">Mahinda XUV 700</h5>
                                <p className="card-text">Price: ₹ 2800/Day</p>
                                 <a href="#" className="btn btn-primary">More Info</a>
                            </div>
                            </div>
                        </div>
                    </div>    
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="card" style={{boxShadow: '8px 8px'}}>
                        <div className='container'>
                        <img src="./Images/car7.jpeg" className="card-img-top" alt="..." style={{height: '250px'}}/>  
                        <div className="card-body">
                             <h5 className="card-title">Maruti Suzuki Swift</h5>
                             <p className="card-text">Price: ₹ 1000/Day</p>
                            <a href="#" className="btn btn-primary">More Info</a>
                        </div>
                        </div>
                     </div>
                    </div>
                <div className="col-md-4 ">
                        <div className="card" style={{boxShadow: '8px 8px'}}>
                            <div className='container'>
                            <img src="./Images/car8.jpeg" className="card-img-top" alt="..." style={{height: '250px'}}/>  
                            <div className="card-body">
                                <h5 className="card-title">Volvo FH</h5>
                                <p className="card-text">Price: ₹ 4000/Day</p>
                                 <a href="#" className="btn btn-primary">More Info</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="card " style={{boxShadow: '8px 8px'}}>
                            <div className='container'>
                            <img src="./Images/car9.jpeg" className="card-img-top" alt="..." style={{height: '250px'}}/>  
                            <div className="card-body">
                                <h5 className="card-title">Honda City</h5>
                                <p className="card-text">Price: ₹ 3500/Day</p>
                                 <a href="#" className="btn btn-primary">More Info</a>
                            </div>
                            </div>
                        </div>
                    </div>    
                </div>
                <br></br>
                <br></br>
           
                </div> 
                
               
             
            
          
                


        )
    }

}
export default Catalog