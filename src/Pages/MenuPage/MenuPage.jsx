import React from 'react';

import './MenuPage.css';
import jareha from '../../img/menu/jareha.jpg';
import cheese from '../../img/menu/cheese.jpg';
import potatos from '../../img/menu/potatos.jpg';
import sausages from '../../img/menu/sausages.jpg';
import set from '../../img/menu/set.jpg';

const menuItems = [
  {
    name: 'Жарёха',
    src: jareha,
    description: 'С золотистым луком, картошкой, болгарским перцем и нежной говядиной.',
    price: 550,
    id: 1,
  },
  {
    name: 'Сыр "Бубновый Валет"',
    src: cheese,
    description: 'Нежные кусочки сыра моцарелла в хрустящей панировке с клюквенным соусом',
    price: 450,
    id: 2,
  },
  {
    name: 'Картофель Петроградский',
    src: potatos,
    description: 'Картофель фри с пармезаном, чесночным маслом и специями',
    price: 450,
    id: 3,
  },
  {
    name: 'Сэт из колбасок',
    src: sausages,
    description: 'Восемь видов колбасок',
    price: 1270,
    id: 4,
  },
  {
    name: 'Сэт с крылышками',
    src: set,
    description: 'Картофель фри, сыр, крылышки',
    price: 1050,
    id: 5,
  },
];

const MenuPage = () => {
  return (
    <article className="menu">
      <h2 className="menu__title">Меню</h2>
      <ul className="menu__list">
        {menuItems.map((item) => {
          return (
            <li className="menu__item" key={item.id}>
              <img className="menu__image" src={item.src} alt={item.description} />
              <div className="menu__content">
                <h3 className="menu__name">{item.name}</h3>
                <p className="menu__description">{item.description}</p>
                <span className="menu__price">Цена: {item.price} руб.</span>
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default MenuPage;
