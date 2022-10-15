import React from 'react';
import eatSvg from '../../img/icons/eat.svg';
import './Advantages.css';

const Advantages = () => {
  return (
    <section className="advantages">
      <div className="container">
        <div className="advantages__wrapper">
          <div className="advantages__item">
            <div className="advantages__icon">
              <img src={eatSvg} alt="свг иконка блюда" />
            </div>
            <div className="advantages__description">
              <div className="advantages__header title">
                Магическая <span>Атмосфера</span>
              </div>
              <p className="advantages__text">
                В нашем заведении царит магическая атмосфера наполненная вкусными ароматами
              </p>
            </div>
          </div>
          <div className="advantages__item">
            <div className="advantages__icon">
              <img src={eatSvg} alt="свг иконка блюда" />
            </div>
            <div className="advantages__description">
              <div className="advantages__header title">
                Лучшее качество <span>Еды</span>
              </div>
              <p className="advantages__text">Качество нашей Еды - отменное!</p>
            </div>
          </div>
          <div className="advantages__item">
            <div className="advantages__icon">
              <img src={eatSvg} alt="свг иконка блюда" />
            </div>
            <div className="advantages__description">
              <div className="advantages__header title">
                Недорогая <span>Еда</span>
              </div>
              <p className="advantages__text">
                Стоимость нашей Еды зависит только от ее количества. Качество всегда на высоте!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
