import { IPromoSlides } from '@/types';
import koraImg from 'public/images/kora-slide.jpg';
import decRastImg from 'public/images/dec-rast-slide.jpg';
import multMaterialImg from 'public/images/mult-material-slide.jpg';
import torfImg from 'public/images/torf-slide.jpg';
import serviecsImg from 'public/images/services-slide.jpg';

export const PROMO_SLIDES: IPromoSlides[] = [
  {
    image: decRastImg,
    title: 'Декоративные растения',
    desc: 'Саженцы хвойных и лиственных деревьев',
  },
  {
    image: koraImg,
    title: 'Сосновая кора',
    desc: 'В наличии все фракции',
  },
  {
    image: multMaterialImg,
    title: 'Мульчирующие материалы',
    desc: 'Широкий выбор, доступные цены',
  },
  {
    image: torfImg,
    title: 'Торф',
    desc: 'Позволит повысить урожайность за счёт улучшения грунта',
  },
  {
    image: serviecsImg,
    title: 'Услуги',
    desc: 'Реализация сада под «ключ». Благоустройство, расчистка участка',
  },
];
