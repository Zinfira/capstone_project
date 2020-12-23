import React, { Component } from 'react';
import SocialFollow from '../SocialFollow';
import ContactUs from '../Contacts/ContactUs';

class Contacts extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center py-5">Contacts</h1>
        <div className="row">
          <div className="about col-5 mx-auto mb-5">
            <h3>Getting in touch is easy!</h3>
            <p>We hope that you were able to find what you were looking for, 
              and if not, then we would like to invite you to e-mail us 
              at <a className="link"  href="mailto:  craftobuy.online.store@gmail.com">craftobuy.online.store@gmail.com</a> with your inquiry. Please allow 1-2 business days for us to respond to your request. We would be happy to craft a special something for you! </p>
            
            <h5 className="py-4">Find us here!</h5>
            <SocialFollow />
          </div>
          <div className="about col-5 mx-auto mb-5">
            <ContactUs />

          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;