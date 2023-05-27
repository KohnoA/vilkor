import { IProduct } from '@/types';
import koraImg from '@/assets/images/kora-card.jpg';
import multMaterialImg from '@/assets/images/mult-material-card.jpg';
import decRastImg from '@/assets/images/dec-rast-card.jpg';
import torfImg from '@/assets/images/torf-card.jpg';

export const PRODUCTS: IProduct[] = [
  {
    image: koraImg,
    title: 'Сосновая кора',
    link: '#',
  },
  {
    image: multMaterialImg,
    title: 'Мульчирующие материалы',
    link: '#',
  },
  {
    image: decRastImg,
    title: 'Декоративные растения',
    link: '#',
  },
  {
    image: torfImg,
    title: 'Торф',
    link: '#',
  },
];
