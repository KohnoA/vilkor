import { IconColor } from '@/constants';
import { StaticImageData } from 'next/image';
import { FC } from 'react';

export interface IconsProps {
  width?: number;
  height?: number;
  color?: IconColor;
}

export interface IPromoSlides {
  image: StaticImageData;
  title: string;
  desc: string;
}

export interface IAdvatage {
  Icon: FC<IconsProps>;
  title: string;
  desc: string;
}

export interface IProduct {
  image: StaticImageData;
  title: string;
  link: string;
}

export interface ISocialItem {
  link: string;
  Icon: FC<IconsProps>;
  title: string;
}
