import React from 'react';
import './Holiday.css';

const Holiday = () => {
  return (
    <section className="holiday" id="holiday">
      <div className="holiday__wrapper">
        <div className="container">
          <div className="holiday__description">
            <h2 className="holiday__header">Отпразднуйте в одном из лучших пивных баров.</h2>
            <p className="holiday__adress">Тверская ул., д. 9, стр.5</p>
          </div>
          <button className="button holiday__button reserve__button_open">заказ столика</button>
        </div>
      </div>
    </section>
  );
};

export default Holiday;
