import React from 'react';

class Thank extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <h3 className="py-5">Thank you for your order! I hope to see you again!</h3>
        </div>       
      </div>
    );
  }
}

export default Thank; 