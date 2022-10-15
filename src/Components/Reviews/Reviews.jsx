import React from 'react';
import './Reviews.css';

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="container">
        <div className="reviews__slider swiper">
          <div className="swiper-wrapper">
            <div className="reviews__slide swiper-slide">
              <div className="reviews__text">
                Прекрасная кухня, отличный персонал, вкусное пиво и изумительный антураж вкупе с
                волшебным саундтреком делают Чистовский лучшим баром из всех, что я знаю. Давно
                искал хорошее заведение,где можно в спокойной обстановке провести вечер за бокалом
                хорошего стаута и нашел его именно здесь.
              </div>
              <div className="reviews__avatar">
                <img src="./img/default-avatar.png" alt="фото посетителя" />
              </div>
              <div className="reviews__name">
                <span>Посетитель</span>
                <span>Наиль</span>
              </div>
            </div>
            <div className="reviews__slide swiper-slide">
              <div className="reviews__text">
                Приятное место, интерьер со вкусом, вежливый персонал. Отмечу необычную концепцию
                самостоятельного розлива пива. Сам выбираешь количество (объем) напитка. С
                удовольствием повторю свой визит в это место.
              </div>
              <div className="reviews__avatar">
                <img src="./img/default-avatar.png" alt="фото посетителя" />
              </div>
              <div className="reviews__name">
                <span>Посетитель</span>
                <span>letro73</span>
              </div>
            </div>
            <div className="reviews__slide swiper-slide">
              <div className="reviews__text">
                Отличное место. Музыка, интерьер и выбор пива как на кранах, так и бутылочного —
                прекрасны, то же и про кухню. Однозначно рекомендую к посещению.
              </div>
              <div className="reviews__avatar">
                <img src="./img/default-avatar.png" alt="фото посетителя" />
              </div>
              <div className="reviews__name">
                <span>Посетитель</span>
                <span>Павел</span>
              </div>
            </div>
          </div>
          <div className="reviews-pagination swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
