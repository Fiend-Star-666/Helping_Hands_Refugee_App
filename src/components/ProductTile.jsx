import React, { Component, useEffect, useState } from 'react';
import '../css/viewCar.css';

class ProductTile extends Component {
    render() {
        return (
                <div className="card" >
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={this.props.product.image} alt="Placeholder image"></img>
                        </figure>
                    </div>
                    <div className="card-content">
                        <p className="title product-title">{this.props.product.name}</p>

                        <div className="content">
                            <strong>{this.props.product.short_description}</strong>
                            <br></br>
                        </div>
                        <a className="button is-primary" href={"product.html?id=" + this.props.product.id.toString()} target="_blank">
                            <strong>More Details</strong>
                        </a>
                    </div>
                </div>
        )
    }
}
export default ProductTile;

