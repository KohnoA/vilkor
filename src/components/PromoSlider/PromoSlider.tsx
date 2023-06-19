import React, { CSSProperties } from 'react';
import Button from '../UI/Button';
import Image from 'next/image';
import styles from './PromoSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { IPromoSlides } from '@/types';
import { IconColor } from '@/constants';

interface PromoSliderProps {
  content: IPromoSlides[];
}

export default function PromoSlider({ content }: PromoSliderProps) {
  return (
    <Swiper
      style={
        {
          '--swiper-theme-color': IconColor.WHITE,
        } as CSSProperties
      }
      effect="fade"
      modules={[EffectFade, Navigation, Pagination, A11y, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      className={styles.slider}
      autoplay={{ delay: 8000 }}
      loop
    >
      {content.map(({ title, desc, image, link }, index) => (
        <SwiperSlide key={title}>
          <Image
            className={styles.slider__image}
            src={image}
            alt={title}
            sizes="100vw"
            placeholder="blur"
            blurDataURL={image.blurDataURL}
            {...(index === 0 ? { priority: true } : {})}
          />
          <div className={styles.slider__overlay} />
          <div className={styles.slider__content}>
            <h2 className={styles.slider__title}>{title}</h2>
            <p className={styles.slider__description}>{desc}</p>
            <Button href={link}>Подробнее &rsaquo;</Button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
