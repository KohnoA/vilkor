import { StaticImageData } from 'next/image';
import { memo, useCallback, useState } from 'react';
import { type Swiper as SwiperType } from 'swiper';
import styles from './Gallery.module.scss';
import MainSlider from './MainSlider/MainSlider';
import SecondSlider from './SecondSlider/SecondSlider';

const INITIAL_SLIDE_INDEX = 0;

interface GalleryProps {
  images: StaticImageData[];
}

function Gallery({ images }: GalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(INITIAL_SLIDE_INDEX);

  const setCurrentSlideIndexHandler = useCallback((event: SwiperType) => {
    setCurrentSlideIndex(event.activeIndex);
  }, []);

  const setThumbsSwiperHandler = useCallback((swiper: SwiperType) => setThumbsSwiper(swiper), []);

  return (
    <div className={styles.container}>
      <MainSlider
        images={images}
        thumbsSwiper={thumbsSwiper}
        setCurrentSlideIndex={setCurrentSlideIndexHandler}
      />

      <SecondSlider
        images={images}
        currentSlideIndex={currentSlideIndex}
        setThumbs={setThumbsSwiperHandler}
      />
    </div>
  );
}

export default memo(Gallery);
