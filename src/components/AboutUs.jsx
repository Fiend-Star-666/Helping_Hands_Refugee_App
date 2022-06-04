import React, { Component } from 'react';
//import Lokendra from './Images/Lokendra.jpeg';
//import Vaibhav_trial from './Images/Vaibhav_trial.jpeg';
//import rohit from './Images/rohit.jpeg';
class AboutUs extends Component{

    render(){
        return(
            <div>
                <div className="about-section">
                    <h1>About Us Page</h1>
                    <p className="h5">BoomCar is India's newest car rental solution, established in 2022 and having operations in 150+ cities all across the country, make it the biggest player in the car-rental market. BoomCar is founded by 4 of KPMG's freshest talents Gursimran Singh, Rohit Jha, Lokendra Kapoor, Vaibhav Khitha. Even though BoomCar started as a internship project it soon saw heights that awakened the founders entrepreneurial spirits which ulitmately led to where it is today, having recieved a myriad of awards in the industry, we at BoomCar always strive for more! We look forward to serving the car rental needs of all Indians.</p>
                </div>

                <h2 style={{align:'center'}}>Our Team</h2>
                <div className="row">
                        
                            <div className="column">
                                <div className="card">
                                    <img src="/Images/Gursimran.jpg" alt="Gursimran" style={{width: "100%" }}/>
                                <div className= "container">
                                    <h2>Gursimran Singh</h2>
                                    <p className="title">CEO and Founder</p>
                                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p>jane@example.com</p>
                                    <p><button className="button">Contact</button></p>
                                    </div>
                                </div>
                            </div>
     

                        <div className="column">
                            <div className="card">
                                <img src="/Images/rohit.jpeg" alt="Rohit Jha" style={{width: "100%"}}/>
                            <div className="container">
                                <h2>Rohit Jha</h2>
                                <p className="title">Art Director</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>mike@example.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                            </div>
                        </div>

                    <div className="column">
                        <div className="card">
                            <img src="/Images/Vaibhav_trial.jpeg" alt="Vaibhav Kitha" style={{width: "100%"}}/>
                        <div className="container">
                            <h2>Vaibhav Kitha</h2>
                            <p className="title">Designer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>john@example.com</p>
                            <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                                <img src="/Images/Lokendra.jpeg" alt="Lokendra" style={{width: "100%"}}/>
                            <div className="container">
                                <h2>Lokendra Kapoor</h2>
                                <p className="title">CEO and Founder</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>jane@example.com</p>
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