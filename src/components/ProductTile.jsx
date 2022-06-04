import React, { Component, useEffect, useState } from 'react';
import '../css/viewCar.css';

    
class ProductTile extends Component {
    render() {
        return (
            <div className="container">
            <div className = "row align-items-start">
            
            <div className='catalog col-md-4'>
                    <div className='images'>
                        <img src={this.props.product.image} alt="Placeholder image"></img>
                        <p className="title product-title">{this.props.product.name}</p>
                        <strong>{this.props.product.short_description}</strong>
                        <br></br>
                          
                        <a className="button is-primary" href={"product.html?id=" + this.props.product.id.toString()} target="_blank">
                            <strong>More Details</strong>
                        </a>
                    </div>
                </div>
                </div>
           </div>
             
        )
    }
}
export default ProductTile;

