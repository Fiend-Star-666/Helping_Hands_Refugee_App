import React from 'react'
// import error404 from "./Images/error404.png";

const error = () => {
    return (
            <div id="wrapper">
                <div >
                    <img src="/Images/error404.png" sizes="1000px 1000px" width="2500" height="2600"  />
                </div>
                 <div id="info">
                    <h3>This page could not be found</h3>
                    <a href='/home'>Click here to go Home</a>
                </div>
            </div >
        
    )

}

export default error



/*

code for video background
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
              <div>
                <h1 style={{color:'white', textShadow:'1px 2px'}}>Own the experience,<br></br>not the ride</h1>
                <p style={{color:'white', textShadow:'1px 1px'}}>Rent Vehicles Around you</p>
                </div>
              </div>

              
          </div>
    </div>
*/