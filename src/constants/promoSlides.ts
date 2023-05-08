import pineBarkImg from '@/assets/images/slide1.jpg';
import peatImg from '@/assets/images/slide2.jpg';
import { StaticImageData } from 'next/image';

interface IpromoSlides {
  image: StaticImageData;
  title: string;
  desc: string;
}

export const PROMO_SLIDES: IpromoSlides[] = [
  {
    image: pineBarkImg,
    title: 'Сосновая кора',
    desc: 'В наличии все фракции',
  },
  {
    image: peatImg,
    title: 'Торф',
    desc: 'В наличии киллотонны торфа',
  },
];
