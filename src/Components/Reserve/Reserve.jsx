import React from 'react';
import './Reserve.css';

const Reserve = () => {
  return (
    <section className="reserve">
      <div className="container">
        <div className="reserve__wrapper">
          <span>Звоните по номеру:</span>
          <span>+7 (916) 490 - 29 - 27!</span>
          <button className="reserve__button_close">X</button>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
