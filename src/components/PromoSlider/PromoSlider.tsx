import React from 'react';
import Button from '../UI/Button';
import Image from 'next/image';
import styles from './PromoSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { IPromoSlides } from '@/types';

interface PromoSliderProps {
  content: IPromoSlides[];
}

function PromoSlider({ content }: PromoSliderProps) {
  return (
    <Swiper
      className={styles.slider}
      modules={[Navigation, Pagination, A11y, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      // loop
    >
      {content.map((item) => (
        <SwiperSlide key={item.title}>
          <Image
            className={styles.slider__image}
            src={item.image}
            alt={item.title}
            priority={true}
          />
          <div className={styles.slider__overlay} />
          <div className={styles.slider__content}>
            <h2 className={styles.slider__title}>{item.title}</h2>
            <p className={styles.slider__description}>{item.desc}</p>
            <Button text="Подробнее &rsaquo;" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default React.memo(PromoSlider);
