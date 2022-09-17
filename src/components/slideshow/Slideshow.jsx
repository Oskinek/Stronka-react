import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const SlideShow = (props) => {

  return (
    <div>
        <Fade>
            {props.images.map((image,index) => (
              <div className='each-slide' key={index}>
                <img src={image} alt='slide'/>
              </div>
            ))}
        </Fade>
    </div>
  );
};

export default SlideShow;