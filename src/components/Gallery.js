import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

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
    fadeOutAnimation={true}
    mouseDragEnabled={true}
    responsive={responsive}
    autoPlayInterval={2000}
    autoPlayDirection="ltr"
    autoPlayActionDisabled={true}
    onSlideChange={this.onSlideChange}
    onSlideChanged={this.onSlideChanged}
  >
    <img src="img/carousel-1.jpg" className="carousel" alt="cubes" />
    <img src="img/carousel-2.jpg" className="carousel" alt="clock" />
    <img src="img/carousel-3.jpg" className="carousel" alt="pens holder" />
    <img src="img/carousel-4.jpg" className="carousel" alt="planter" />
    <img src="img/carousel-5.jpg" className="carousel" alt="planters" />
    <img src="img/carousel-6.jpg" className="carousel" alt="planters" />
  </AliceCarousel>
    );
  }
}