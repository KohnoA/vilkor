import { IconColor } from '@/constants';
import Image, { StaticImageData } from 'next/image';
import { CSSProperties, memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom, EffectFade, FreeMode, Navigation, Thumbs, type Swiper as SwiperType } from 'swiper';
import styles from './MainSlider.module.scss';

interface MainSliderProps {
  images: StaticImageData[];
  thumbsSwiper: SwiperType | null;
  setCurrentSlideIndex: (swiper: SwiperType) => void;
}

function MainSlider({ images, thumbsSwiper, setCurrentSlideIndex }: MainSliderProps) {
  return (
    <Swiper
      onSlideChange={setCurrentSlideIndex}
      style={
        {
          '--swiper-theme-color': IconColor.WHITE,
        } as CSSProperties
      }
      zoom={true}
      effect="fade"
      navigation={true}
      thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
      modules={[Zoom, EffectFade, FreeMode, Navigation, Thumbs]}
      className={styles.container}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className={styles.imageWrapper}>
            <div className="swiper-zoom-container">
              <Image
                className={styles.image}
                style={{ objectFit: 'cover' }}
                src={image}
                alt="Photo of an example of work"
                placeholder="blur"
                blurDataURL={image.blurDataURL}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default memo(MainSlider);
