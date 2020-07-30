import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'

export default class Gallery extends React.Component {


  onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    console.log('Slide`s position during a change: ', e.slide);
  }

  onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
  }

  render() {
    const responsive = {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 3
      }
    };
    return (
  <AliceCarousel
    duration={500}
    autoPlay={true}
    startIndex={1}
    fadeInAnimation={true}
    mouseDragEnabled={true}
    responsive={responsive}
    autoPlayInterval={2000}
    autoPlayDirection="ltr"
    autoPlayActionDisabled={true}
    onSlideChange={this.onSlideChange}
    onSlideChanged={this.onSlideChanged}
  >
    <img src="img/product-0.jpg" className="carousel" alt="product" />
    <img src="img/product-03.jpg" className="carousel" alt="product" />
    {/* <img src="" className="yours-custom-class" alt="product" />
        <img src="" className="yours-custom-class" alt="product"><h2>3</h2></img>
        <img src="" className="yours-custom-class" alt="product"><h2>4</h2></img>
      <img src="" className="yours-custom-class" alt="product"><h2>5</h2></img> */}
  </AliceCarousel>
    );
  }
}