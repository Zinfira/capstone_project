import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

class Product extends Component {
  render() {
    const { id, title, img, price, size, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5" onClick={console.log('you clicked me on the image container')}>
            <Link to='/details'>
              <img src={img} alt="product" className="card-img-top" />
            </Link>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`

`

export default Product; 