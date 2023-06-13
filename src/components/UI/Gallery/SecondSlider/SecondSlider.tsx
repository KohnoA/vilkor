import { FreeMode, Navigation, Thumbs, type Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './SecondSlider.module.scss';
import Image, { StaticImageData } from 'next/image';
import { memo } from 'react';

interface SecondSliderProps {
  images: StaticImageData[];
  currentSlideIndex: number;
  setThumbs: (swiper: SwiperType) => void;
}

function SecondSlider({ images, currentSlideIndex, setThumbs }: SecondSliderProps) {
  return (
    <Swiper
      onSwiper={setThumbs}
      spaceBetween={15}
      slidesPerView={images.length}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className={styles.container}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className={styles.slide}>
          <Image
            className={`${styles.image} ${
              currentSlideIndex !== index ? styles.image_notActive : ''
            }`}
            src={image}
            alt="Photo of an example of work"
            placeholder="blur"
            blurDataURL={image.blurDataURL}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default memo(SecondSlider);
