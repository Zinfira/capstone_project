import React, { Component } from 'react';
import Gallery from './Gallery';

class AboutUs extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center py-5">We are happy to see you on our page!</h1>
        <div className="row">
          <div className="col-10 mx-auto">Hello</div>
        <Gallery />
        </div>
      </div>
      
    );
  }
}

export default AboutUs;