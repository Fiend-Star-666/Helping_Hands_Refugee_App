import React, { Component, useEffect, useState } from 'react';
import ProductTile from './ProductTile';

import {products} from './products'

class ProductCatlog extends Component {
    renderTile = (current_item) => {
        return <ProductTile product={current_item}></ProductTile>;
    }

    render() {
        let tiles = [];
        products.map(product =>{
            tiles.push(this.renderTile(product));
        })

        return tiles;
    }
}

export default ProductCatlog;