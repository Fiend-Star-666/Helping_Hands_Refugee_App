import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../css/loginStyle.css';
import login from '../video/login.mp4';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem,Container} from 'react-bootstrap';



//public\video
//C:\Users\gurms\git\vehicleFront\vehicle-front\src\components\login.mp4
//src\components\Login.jsx

//C:\Users\gurms\git\vehicleFront\vehicle-front\public\video\login.mp4
export default function Home() {
  return (
    <div>
          <div style={{
              height: "100vh",
              width: "100vw",
              objectFit: "cover",
              position: "relative",
              pointerEvents: "none",
            }}> 
              <video autoPlay loop playsInline muted
              >
              <source
                  src={login}
                  typr = 'video/mp4'
              />
              <h2>Own the Experience</h2>
                
              </video>
              <div style={{
              color: "black",
              position: "relative",
              marginTop: "50px",
              marginLeft:"-250px",
              fontFamily: 'Varela Round',
              
              //textAlign: "center",
              //alignItems: "center",
              //justifyContent: "center",
              
            }}>
                <h2>Own the experience,<br></br>not the ride</h2>
                <p>Rent Vehicles Around you</p>
              </div>

              
          </div>
    </div>

  );
}

/*


          <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">BoomCar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Nav>
                    <Nav.Link href="#deets">LogIn/SignUp</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                      About
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
                </Container>
              </Navbar>   
          </div>

*/