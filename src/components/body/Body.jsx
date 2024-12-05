import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import MrMrs from '../../assets/MrMrs.jpg';
import Image2 from '../../assets/Image2.jpg';
import Footer from '../footer/Footer';

function Body() {
  return (
    <>
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={10000}
        showStatus={false}
        transitionTime={800}
        
      >
        <div className=''>
          <img src={MrMrs} className="object-cover  opacity-90" alt="Movie Scene 1"  />
        </div>
        <div>
          <img src={MrMrs} className="object-cover opacity-90" alt="Movie Scene 2" />
        </div>
        
      </Carousel>
    </>
    
  );
}

export default Body;
