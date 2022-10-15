import React from 'react';
import logo from '../../img/logo.jpg';
import cart from '../../img/icons/cart.svg';
import phone from '../../img/icons/phone.svg';
import burger from '../../img/icons/burger.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <a href="/" className="header__logo">
            <img src={logo} alt="логотип компании" />
          </a>
          <div className="header__information">
            <ul className="header__menu">
              <li>
                <a href="#menu-anchor">Меню</a>
              </li>
              <li>
                <a href="#history">О нас</a>
              </li>
              <li>
                <a href="#holiday">Бронь</a>
              </li>
            </ul>
            <div className="header__buy">
              <img src={cart} alt="иконка корзины" />
            </div>
            <div className="header__telephone">
              <a href="tel:+999-888-76-54" className="header__number">
                <div className="header__tel">
                  <img src={phone} alt="иконка телефона" />
                </div>
                <span>+7 (916) 490 - 29 - 27</span>
              </a>
              <div className="header__text">Свяжитесь с нами для бронирования</div>
            </div>
            <button className="header__button button reserve__button_open">Заказ столика</button>
          </div>
          <div className="header__burger">
            <img src={burger} alt="иконка меню-бургер" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
