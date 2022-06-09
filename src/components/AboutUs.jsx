import React, { Component } from 'react';
class AboutUs extends Component{

    render(){
        return(
            <div style={{}}>
                <br></br>
                
                
            
            <div className="about-section">
                <div className='card' style={{backgroundColor:'purple', boxShadow: '10px 10px' }}>
                    <h1 style={{color:'white',textShadow: '1px 2px'}}>About Us: :</h1> 
                </div> 
                <br></br>
                <div className='card' style={{backgroundColor:'white', boxShadow: '1px 1px' }}>
                    <p style={{textAlign:'justify'}}>BoomCar is India's newest car rental solution, established in 2022 and having operations in 150+ cities all across the country, make it the biggest player in the car-rental market. BoomCar is founded by 4 of KPMG's freshest talents Gursimran Singh, Rohit Jha, Lokendra Kapoor, Vaibhav Khitha. Even though BoomCar started as a internship project it soon saw heights that awakened the founders entrepreneurial spirits which ulitmately led to where it is today, having recieved a myriad of awards in the industry, we at BoomCar always strive for more! We look forward to serving the car rental needs of all Indians.</p>
                    </div> 
            </div>
            <br></br>
            <div className='card' style={{backgroundColor:'purple', boxShadow: '10px 10px' }}>
                <h2 style={{align:'center', textShadow: '1px 2px', color:'white'}}>Our Team:</h2>
               </div>
                <div className="row">
                        
                            <div className="column" >
                                <div className="card" style={{boxShadow: '4px 3px'}}>
                                    <img src="/Images/Gursimran.jpg" alt="Gursimran" style={{height: '250px' }}/>
                                <div className= "container">
                                    <h5 style={{textAlign: 'center'}}>Gursimran Singh</h5>
                                    <p style={{textAlign: 'center'}}>Thapar Institute Of Engineering And Technology</p>
                                    <p style={{textAlign: 'center'}}>Analyst Intern</p>
                                    <p>gsingh3_be18@thapar.edu</p>
                                    <p><button className="button">Contact</button></p>
                                    </div>
                                </div>
                            </div>
     

                        <div className="column" style={{width: '300px'}}>
                            <div className="card" style={{boxShadow: '4px 3px'}}>
                                <img src="/Images/rohit.jpeg" alt="Rohit Jha" style={{width: 'auto', height:'250px'}}/>
                            <div className="container">
                                <h5 style={{textAlign: 'center'}}>Rohit Jha</h5>
                                <p style={{textAlign: 'center'}}>Manipal Institute Of Technology</p>
                                <br></br>
                                <p style={{textAlign: 'center'}}>Analyst Intern</p>
                                <p>rohit.jha@gmail.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                            </div>
                        </div>

                    <div className="column" >
                        <div className="card" style={{boxShadow: '4px 3px'}}>
                            <img src="/Images/Vaibhav_trial.jpeg" alt="Vaibhav Kitha" style={{width: "auto",height: '250px'}}/>
                        <div className="container">
                            <h5 style={{textAlign: 'center'}}>Vaibhav Kitha</h5>
                            <p style={{textAlign: 'center'}}>Manipal Institute Of Technology</p>
                            <br></br>
                            <p style={{textAlign: 'center'}}>Analyst Intern</p>
                            <p>vaibhav.kitha@gmail.com</p>
                            <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                    <div className="column" >
                        <div className="card" style={{boxShadow: '4px 3px'}}>
                                <img src="/Images/Lokendra.jpeg" alt="Lokendra" style={{width: "auto",height: '250px'}}/>
                            <div className="container">
                                <h5 style={{textAlign: 'center'}}>Lokendra Kapoor</h5>
                                <p style={{textAlign: 'center'}}>Thapar Institute Of Engineering And Technology</p>
                                <p style={{textAlign: 'center'}}>Analyst Intern</p>
                                <p>lkapoor_be18@thapar.edu</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
        </div>    
        </div>
        );

    }

}

export default AboutUs;