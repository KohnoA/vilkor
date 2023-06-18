import { IProduct } from '@/types';
import { ProductCategory } from '.';

import koraImg from 'public/images/kora-card.jpg';
import multMaterialImg from 'public/images/mult-material-card.jpg';
import decRastImg from 'public/images/dec-rast-card.jpg';
import torfImg from 'public/images/torf-card.jpg';

import barkLarge from 'public/images/bark-large.jpg';

import barkMedium from 'public/images/bark-medium.jpg';
import barkMedium2 from 'public/images/bark-medium2.jpg';
import barkMedium3 from 'public/images/bark-medium3.jpg';

import barkSmall03 from 'public/images/bark-small-0-3.jpg';
import barkSmall13 from 'public/images/bark-small-1-3.jpg';
import barkSifting from 'public/images/bark-sifting.jpg';

import mulchItem from 'public/images/mulchItem.jpg';

export const PRODUCTS: IProduct[] = [
  {
    id: 1,
    image: koraImg,
    title: 'Сосновая кора',
    category: ProductCategory.BARK,
    items: [
      {
        id: 1,
        images: [barkLarge, barkMedium2],
        title: 'Кора сосновая (крупная)',
        fraction: '9 - 14 см.',
        volume: '50 л.',
        price: '15 руб.',
        packaging: 'Мешок',
        stock: true,
      },
      {
        id: 2,
        images: [barkMedium, barkMedium2, barkMedium3],
        title: 'Кора сосновая (средняя)',
        fraction: '4 - 8 см.',
        volume: '50 л.',
        price: '13 руб.',
        packaging: 'Мешок',
        stock: true,
      },
      {
        id: 3,
        images: [barkSmall13, barkMedium2],
        title: 'Кора сосновая (мелкая люкс)',
        fraction: '1 - 3 см.',
        volume: '50 л.',
        price: '11 руб.',
        packaging: 'Мешок',
        stock: true,
      },
      {
        id: 4,
        images: [barkSmall03, barkMedium2],
        title: 'Кора сосновая (мелкая)',
        fraction: '0 - 3 см.',
        volume: '50 л.',
        price: '10 руб.',
        packaging: 'Мешок',
        stock: true,
      },
      {
        id: 5,
        images: [barkSifting, barkMedium2],
        title: 'Кора сосновая (отсев)',
        fraction: '0 - 0,5см',
        volume: '50 л.',
        price: '7 руб.',
        packaging: 'Мешок',
        stock: true,
      },
    ],
  },
  {
    id: 2,
    image: multMaterialImg,
    title: 'Мульчирующие материалы',
    category: ProductCategory.MULCH,
    items: [
      {
        id: 1,
        images: [multMaterialImg, mulchItem],
        title: 'Шишки',
        volume: '50 л.',
        price: '15 руб.',
        packaging: 'Мешок',
        stock: true,
      },
      {
        id: 2,
        images: [multMaterialImg, mulchItem],
        title: 'Солома',
        volume: '80 л.',
        price: '8 руб.',
        packaging: 'Мешок',
        stock: true,
      },
      {
        id: 3,
        images: [multMaterialImg, mulchItem],
        title: 'Гречишная скорлупа',
        volume: '50 л.',
        price: '15 руб.',
        packaging: 'Мешок',
        stock: true,
      },
      {
        id: 4,
        images: [multMaterialImg, mulchItem],
        title: 'Опилки',
        volume: '60 л.',
        price: '10 руб.',
        packaging: 'Мешок',
        stock: true,
      },
      {
        id: 5,
        images: [multMaterialImg, mulchItem],
        title: 'Щепа',
        volume: '60 л.',
        price: '12 руб.',
        packaging: 'Мешок',
        stock: true,
      },
      {
        id: 6,
        images: [multMaterialImg, mulchItem],
        title: 'Смесь для голубики',
        volume: '50 л.',
        price: '15 руб.',
        packaging: 'Мешок',
        stock: true,
      },
    ],
  },
  {
    id: 3,
    image: decRastImg,
    title: 'Декоративные растения',
    category: ProductCategory.PLANTS,
    items: [],
  },
  {
    id: 4,
    image: torfImg,
    title: 'Торф',
    category: ProductCategory.PEAT,
    items: [
      {
        id: 1,
        images: [torfImg, mulchItem],
        title: 'Торф верховой',
        volume: '50 л.',
        price: '13 руб.',
        acidity: 'pH 2,5-3,1',
        packaging: 'Мешок',
        stock: true,
      },
      {
        id: 2,
        images: [torfImg, mulchItem],
        title: 'Торф низинный (нейтральный)',
        volume: '50 л.',
        price: '9 руб.',
        acidity: 'pH 5,5-6,5',
        packaging: 'Мешок',
        stock: true,
      },
    ],
  },
];
