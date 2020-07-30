import React, { Component } from 'react';
import Gallery from './Gallery';

class AboutUs extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center py-5">
          We are happy to see you on our page!
        </h1>
        <Gallery />
        <h2 className="text-center py-5">About Us</h2>
        <div className="row">
          <div className="about col-5 mx-auto mb-5">
            <h4>
              During quarantine, my boyfriend and I tried to find cool things
              to do at home. We think that handmade crafts are always valuable
              because you work on each product with all your attention. We are
              here to share the product of our hobbies.{" "}
            </h4>
            <br />
            <h4>
              Thank you for your interest in our private store of Handmade
              Products! All of our items are crafted with purpose to make life
              more exciting. We believe that it’s the simple small things that
              make a big difference. That’s why we decided to start giving back
              to the world our passion and love for handmade gifts.{" "}
            </h4>
          </div>
          <div className="about col-5 mx-auto py-5">
            <h4>You can watch videos how we create all our craft: </h4>
            <p className="py-10">...coming soon</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;