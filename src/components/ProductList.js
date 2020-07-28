import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  render() {
    return (
      <div>
        <Product />
       <h3>hello from product list</h3> 
      </div>
    );
  }
}

export default ProductList;