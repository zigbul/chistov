import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <section className="menu">
      <h2 className="menu__header">Наше меню</h2>
      <div className="container">
        <div className="menu__wrapper">
          <div className="menu__item">
            <h3 className="menu__title">Закуски</h3>
            <ul className="menu__list">
              <li className="menu__list-item">
                <span className="menu__name">Крылышки BBQ</span>
                <span className="menu__price">550</span>
              </li>
              <li className="menu__list-item">
                <p className="menu__name">Картофель "Петроградский" (с фирменным соусом)</p>
                <span className="menu__price">330</span>
              </li>
              <li className="menu__list-item">
                <span className="menu__name">Жареный сыр "Бубновый валет"</span>
                <span className="menu__price">440</span>
              </li>
              <li className="menu__list-item">
                <span className="menu__name">Начос "Чилллли"</span>
                <span className="menu__price">620</span>
              </li>
              <li className="menu__list-item">
                <span className="menu__name">Брускета с ротбифом</span>
                <span className="menu__price">560</span>
              </li>
              <li className="menu__list-item">
                <span className="menu__name">Вяленое мясо</span>
                <span className="menu__price">425</span>
              </li>
            </ul>
          </div>
          <div className="menu__item">
            <h3 className="menu__title">Горячее</h3>
            <ul className="menu__list">
              <li className="menu__list-item">
                <span className="menu__name">Горячие Ребра Ш.К.И (большая порция)</span>
                <span className="menu__price">840</span>
              </li>
              <li className="menu__list-item">
                <p className="menu__name">Бифштекс (вкусный сочный)</p>
                <span className="menu__price">780</span>
              </li>
              <li className="menu__list-item">
                <span className="menu__name">Жареха (шкварчащая на сковородке)</span>
                <span className="menu__price">440</span>
              </li>
              <li className="menu__list-item">
                <span className="menu__name">Медальоны с беконом</span>
                <span className="menu__price">620</span>
              </li>
              <li className="menu__list-item">
                <span className="menu__name">Брускета с ротбифом</span>
                <span className="menu__price">560</span>
              </li>
            </ul>
          </div>
          <div className="menu__item">
            <h3 className="menu__title">Салаты</h3>
            <ul className="menu__list">
              <li className="menu__list-item">
                <span className="menu__name">Слата "Чистовский" (из баклажан)</span>
                <span className="menu__price">530</span>
              </li>
              <li className="menu__list-item">
                <p className="menu__name">Салат "Теплый" (с печенью)</p>
                <span className="menu__price">580</span>
              </li>
              <li className="menu__list-item">
                <span className="menu__name">Салат с ростбифом</span>
                <span className="menu__price">720</span>
              </li>
              <li className="menu__list-item">
                <span className="menu__name">Салат "Бурлюк" (с курицей как цезарь)</span>
                <span className="menu__price">590</span>
              </li>
              <li className="menu__list-item">
                <span className="menu__name">Салат "Футурист" (овощной с рассольным сыром)</span>
                <span className="menu__price">520</span>
              </li>
            </ul>
          </div>
          <div className="menu__item">
            <h3 className="menu__title">Колбаски</h3>
            <ul className="menu__list">
              <li className="menu__list-item">
                <span className="menu__name">Баварские</span>
                <span className="menu__price">475</span>
              </li>
              <li className="menu__list-item">
                <p className="menu__name">Нюрнбергские с сыром</p>
                <span className="menu__price">460</span>
              </li>
              <li className="menu__list-item">
                <span className="menu__name">Мексиканские по-острее</span>
                <span className="menu__price">465</span>
              </li>
              <li className="menu__list-item">
                <span className="menu__name">Тюрингские</span>
                <span className="menu__price">470</span>
              </li>
              <li className="menu__list-item">
                <span className="menu__name">Франконские (копченые)</span>
                <span className="menu__price">475</span>
              </li>
              <li className="menu__list-item">
                <span className="menu__name">Тирольские (копченые)</span>
                <span className="menu__price">460</span>
              </li>
              <li className="menu__list-item">
                <span className="menu__name">Куриные (спиральные)</span>
                <span className="menu__price">460</span>
              </li>
              <li className="menu__list-item">
                <span className="menu__name">Баварские (спиральные)</span>
                <span className="menu__price">470</span>
              </li>
            </ul>
          </div>
        </div>
        <button className="menu__button">X</button>
      </div>
    </section>
  );
};

export default Menu;
