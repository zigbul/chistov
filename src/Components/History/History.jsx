import React from 'react';
import imgOne from '../../img/history-img-1.jpg';
import imgTwo from '../../img/history-img-3.png';
import './History.css';

const History = () => {
  return (
    <section className="history" id="history">
      <div className="container">
        <div className="history__wrapper">
          <div className="history__description">
            <h2 className="history__header title">
              Наша <span>История</span>
            </h2>
            <p className="history__text">
              Супрематический бар в Холодильном переулке. В меню "Чистовский" закуски к пиву,
              например, вяленое мясо и начос с горячим мясным соусом. Есть сеты на компанию. На
              горячее подаем разные виды колбасок, есть баварские или нюрнбергские с сыром. В баре
              наливаем российское крафтовое пиво и сидр. Для гостей есть два зала, которые оформлены
              в духе авангарда: первый зал с барной стойкой, расписанными стенами и парящими дверями
              под потолком, а во втором - десять пивных кранов для самостоятельного розлива с
              системой, как на заправочных станциях.
            </p>
          </div>
          <div className="history__img">
            <div className="history__img-1">
              <img src={imgOne} alt="картинка 1" />
            </div>
            <div className="history__img-2">
              <img src={imgTwo} alt="картинка 2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
