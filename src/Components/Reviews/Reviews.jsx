import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import defaultAvatar from '../../img/default-avatar.png';

import './Reviews.css';
import 'swiper/css';
import 'swiper/css/pagination';

const reviewsData = [
  {
    text: `Прекрасная кухня, отличный персонал, вкусное пиво и изумительный антураж вкупе с
    волшебным саундтреком делают Чистовский лучшим баром из всех, что я знаю. Давно
    искал хорошее заведение,где можно в спокойной обстановке провести вечер за бокалом
    хорошего стаута и нашел его именно здесь.`,
    name: 'Наиль',
    id: 1,
  },
  {
    text: `Приятное место, интерьер со вкусом, вежливый персонал. Отмечу необычную концепцию
    самостоятельного розлива пива. Сам выбираешь количество (объем) напитка. С
    удовольствием повторю свой визит в это место.`,
    name: 'letro73',
    id: 2,
  },
  {
    text: `Отличное место. Музыка, интерьер и выбор пива как на кранах, так и бутылочного —
    прекрасны, то же и про кухню. Однозначно рекомендую к посещению.`,
    name: 'Павел',
    id: 3,
  },
];

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="container">
        <div className="reviews__slider">
          <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
            {reviewsData.map(({ text, name, avatar, id }) => {
              return (
                <SwiperSlide key={id}>
                  <div className="reviews__slide">
                    <div className="reviews__text">{text}</div>
                    <div className="reviews__avatar">
                      <img src={avatar ?? defaultAvatar} alt="фото посетителя" />
                    </div>
                    <div className="reviews__name">
                      <span>Посетитель</span>
                      <span>{name}</span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
