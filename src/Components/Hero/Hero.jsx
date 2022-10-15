import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__description">
          <div className="hero__subtext" id="menu-anchor">
            Добро пожаловать в
          </div>
          <h1 className="hero__header">наш Бар</h1>
          <div className="hero__suptext">ЧИСТОВСКИЙ</div>
          <button type="button" id="menu-btn" className="hero__button button">
            Меню
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
