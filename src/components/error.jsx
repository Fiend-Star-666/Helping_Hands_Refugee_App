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