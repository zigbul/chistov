import React from 'react';
import image2 from '../../img/2.jpg';
import image3 from '../../img/3.jpg';
import image4 from '../../img/4.jpg';
import image5 from '../../img/5.jpg';
import image6 from '../../img/6.jpg';
import image7 from '../../img/7.jpg';
import './Gallery.css';

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="container">
        <h2 className="gallery__header title">Галерея</h2>
        <div className="gallery__wrapper">
          <div className="gallery__item">
            <div className="gallery__img-b">
              <img src={image2} alt="" />
            </div>
            <div className="gallery__img">
              <div className="gallery__img-s">
                <img src={image3} alt="" />
              </div>
              <div className="gallery__img-s">
                <img src={image4} alt="" />
              </div>
            </div>
          </div>
          <div className="gallery__item">
            <div className="gallery__img">
              <div className="gallery__img-s">
                <img src={image5} alt="" />
              </div>
              <div className="gallery__img-s">
                <img src={image6} alt="" />
              </div>
            </div>
            <div className="gallery__img-b">
              <img src={image7} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
