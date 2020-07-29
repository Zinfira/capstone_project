import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
        const { id, title, img, info, price, size, color, material, author, inCart } = value.detailProduct;
        return (
          <div className="container py-5">
            {/* title */}
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-grey my-5">
                <h1>{title}</h1>
              </div>
            </div>
            {/* end title */}
            {/* product info */}
            <div className="row">
              {/* product image */}
              <div className="col-10 mx-auto col-md-6 my-3">
                <img src={img} className="img-fluid" alt="product" />
              </div>
              {/* product text */}
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2>{title}</h2>
                <h4 className="text-grey">
                  <strong>
                    price : <span>$</span>
                    {price}
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  Dimensions : {size}
                </p>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  Material : {material}
                </p>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  Color : {color}
                </p>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  some info about product
                </p>
                <p className="text-muted lead">
                  {info}
                </p>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  made by : <span className="text-uppercase">{author}</span>
                </h4>
                <div>
                  {/* buttons */}
                  <Link to="/products">
                    <ButtonContainer>back to products</ButtonContainer>
                  </Link>
                  <ButtonContainer
                    cart
                    disabled={inCart ? true : false }
                    onClick={() => {
                      value.addToCart(id)
                    }}
                  >
                    {inCart ? "in Cart" : "add to cart"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          </div>  
        )
        }}
      </ProductConsumer>
    );
  }
}

export default Details;