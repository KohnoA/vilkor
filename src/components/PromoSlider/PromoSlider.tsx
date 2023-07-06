import { CSSProperties, useEffect } from 'react';
import Button from '../UI/Button';
import Image from 'next/image';
import styles from './PromoSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { IPromoSlides } from '@/types';
import { IconColor } from '@/constants';
import { useInView } from 'react-intersection-observer';

interface PromoSliderProps {
  content: IPromoSlides[];
}

export default function PromoSlider({ content }: PromoSliderProps) {
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('load', setVh);
    window.addEventListener('resize', setVh);

    return () => {
      window.removeEventListener('load', setVh);
      window.removeEventListener('resize', setVh);
    };
  }, []);

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
      className={styles.container}
      autoplay={{ delay: 8000 }}
      loop
    >
      {content.map(({ title, desc, image, link }) => (
        <SwiperSlide key={title}>
          {({ isActive }) => (
            <>
              <Image
                className={styles.image}
                src={image}
                alt={title}
                sizes="1440px"
                placeholder="blur"
                blurDataURL={image.blurDataURL}
              />
              <div className={styles.overlay} />
              <div
                ref={ref}
                className={`${styles.content} ${inView && isActive ? styles.content_animate : ''}`}
              >
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{desc}</p>
                <Button href={link}>Подробнее &rsaquo;</Button>
              </div>
            </>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
