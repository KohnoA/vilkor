import { IconColor, ProductCategory } from '@/constants';
import { StaticImageData } from 'next/image';
import { FC } from 'react';

export interface IconsProps {
  width?: number;
  height?: number;
  color?: IconColor;
}

export interface IPromoSlides {
  image: StaticImageData;
  link: string;
  title: string;
  desc: string;
}

export interface IAdvatage {
  Icon: FC<IconsProps>;
  title: string;
  desc: string;
}

export interface IProductItem {
  id: number;
  images: StaticImageData[];
  title: string;
  fraction?: string;
  packaging?: string;
  volume?: string;
  acidity?: string;
  price: string;
  stock: boolean;
}

export interface IProduct {
  id: number;
  image: StaticImageData;
  title: string;
  category: ProductCategory;
  items: IProductItem[];
}

export interface ISocialItem {
  link: string;
  Icon: FC<IconsProps>;
  title: string;
}

export interface IWork {
  title: string;
  desc: string;
  images: StaticImageData[];
}

export type AccordionContentType = {
  id: number;
  title: string;
  list: {
    id: number;
    name: string;
    explanation: string;
  }[];
}[];
