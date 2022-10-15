import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="container">
        <h2 className="gallery__header title">Галерея</h2>
        <div className="gallery__wrapper">
          <div className="gallery__item">
            <div className="gallery__img-b">
              <img src="./img/2.jpg" alt="" />
            </div>
            <div className="gallery__img">
              <div className="gallery__img-s">
                <img src="./img/3.jpg" alt="" />
              </div>
              <div className="gallery__img-s">
                <img src="./img/4.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="gallery__item">
            <div className="gallery__img">
              <div className="gallery__img-s">
                <img src="./img/5.jpg" alt="" />
              </div>
              <div className="gallery__img-s">
                <img src="./img/6.jpg" alt="" />
              </div>
            </div>
            <div className="gallery__img-b">
              <img src="./img/7.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
