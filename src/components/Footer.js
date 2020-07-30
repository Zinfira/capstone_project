import React from 'react';

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        {/* <div className="row">
          <div className="col">
            <h4>CraftoBuy Store</h4>
            <ul className="list-unstyled">
              <li>123-456-7890</li>
              <li>Portland, OR, USA</li>
            </ul>
          </div>
        </div> 
        <hr /> */}
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} CraftoBuy Store
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;