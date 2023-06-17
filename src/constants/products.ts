import { IProduct } from '@/types';
import { AppRoutes } from '.';

import koraImg from 'public/images/kora-card.jpg';
import multMaterialImg from 'public/images/mult-material-card.jpg';
import decRastImg from 'public/images/dec-rast-card.jpg';
import torfImg from 'public/images/torf-card.jpg';

import barkLarge from 'public/images/bark-large.jpg';
import barkMedium from 'public/images/bark-medium.jpg';
import barkSmall03 from 'public/images/bark-small-0-3.jpg';
import barkSmall13 from 'public/images/bark-small-1-3.jpg';
import barkSifting from 'public/images/bark-sifting.jpg';

export const PRODUCTS: IProduct[] = [
  {
    id: 1,
    image: koraImg,
    title: 'Сосновая кора',
    link: AppRoutes.PRODUCTS_BARK,
    category: 'bark',
    items: [
      {
        id: 1,
        image: barkLarge,
        title: 'Кора сосновая (крупная)',
        fraction: '9 - 14 см.',
        volume: '50 л.',
        price: '15 руб.',
      },
      {
        id: 2,
        image: barkMedium,
        title: 'Кора сосновая (средняя)',
        fraction: '4 - 8 см.',
        volume: '50 л.',
        price: '13 руб.',
      },
      {
        id: 3,
        image: barkSmall13,
        title: 'Кора сосновая (мелкая люкс)',
        fraction: '1 - 3 см.',
        volume: '50 л.',
        price: '11 руб.',
      },
      {
        id: 4,
        image: barkSmall03,
        title: 'Кора сосновая (мелкая)',
        fraction: '0 - 3 см.',
        volume: '50 л.',
        price: '10 руб.',
      },
      {
        id: 5,
        image: barkSifting,
        title: 'Кора сосновая (отсев)',
        fraction: '0 - 0,5см',
        volume: '50 л.',
        price: '7 руб.',
      },
    ],
  },
  {
    id: 2,
    image: multMaterialImg,
    title: 'Мульчирующие материалы',
    link: AppRoutes.PRODUCTS_MULCH,
    category: 'mulch',
    items: [],
  },
  {
    id: 3,
    image: decRastImg,
    title: 'Декоративные растения',
    link: AppRoutes.PRODUCTS_PLANTS,
    category: 'plants',
    items: [],
  },
  {
    id: 4,
    image: torfImg,
    title: 'Торф',
    link: AppRoutes.PRODUCTS_PEAT,
    category: 'peat',
    items: [],
  },
];
