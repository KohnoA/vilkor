import { IPromoSlides } from '@/types';
import koraImg from 'public/images/kora-slide.jpg';
import decRastImg from 'public/images/dec-rast-slide.jpg';
import multMaterialImg from 'public/images/mult-material-slide.jpg';
import torfImg from 'public/images/torf-slide.jpg';
import serviecsImg from 'public/images/services-slide.jpg';
import { AppRoutes, ProductCategory } from '.';

export const PROMO_SLIDES: IPromoSlides[] = [
  {
    image: serviecsImg,
    link: AppRoutes.SERVICES,
    title: 'Ландшафтные и строительные работы',
    desc: 'Услуги по посадке растений, обрезке деревьев. Укладка паркета',
  },
  {
    image: koraImg,
    link: `${AppRoutes.PRODUCTS}/${ProductCategory.BARK}`,
    title: 'Сосновая кора',
    desc: 'Все фракции в наличии ',
  },
  {
    image: multMaterialImg,
    link: `${AppRoutes.PRODUCTS}/${ProductCategory.MULCH}`,
    title: 'Мульчирующие материалы',
    desc: 'Широкий выбор, доступные цены',
  },
  {
    image: decRastImg,
    link: `${AppRoutes.PRODUCTS}/${ProductCategory.PLANTS}`,
    title: 'Декоративные растения',
    desc: 'Саженцы хвойных и лиственных деревьев',
  },
  {
    image: torfImg,
    link: `${AppRoutes.PRODUCTS}/${ProductCategory.PEAT}`,
    title: 'Торф',
    desc: 'Позволит повысить урожайность за счёт улучшения грунта',
  },
];
