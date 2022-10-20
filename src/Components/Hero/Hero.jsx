import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to={'/menu'} type="button" id="menu-btn" className="hero__button button">
            Меню
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
