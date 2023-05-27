import { IPromoSlides } from '@/types';
import testImg from '@/assets/images/slide1.jpg';
import koraImg from '@/assets/images/kora-slide.jpg';
import decRastImg from '@/assets/images/dec-rast-slide.jpg';
import multMaterialImg from '@/assets/images/mult-material-slide.jpg';

export const PROMO_SLIDES: IPromoSlides[] = [
  {
    image: koraImg,
    title: 'Сосновая кора',
    desc: 'В наличии все фракции',
  },
  {
    image: decRastImg,
    title: 'Декоративные растения',
    desc: 'Саженцы хвойных и лиственных деревьев',
  },
  {
    image: multMaterialImg,
    title: 'Мульчирующие материалы',
    desc: 'Широкий выбор, доступные цены',
  },
  {
    image: testImg,
    title: 'Торф',
    desc: 'Позволит повысить урожайность за счёт улучшения грунта',
  },
  {
    image: testImg,
    title: 'Услуги',
    desc: 'Реализация сада под «ключ». Благоустройство, расчистка участка',
  },
];
