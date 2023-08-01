import { IAdvatage } from '@/types';
import DeliveryIcon from '@/components/icons/DeliveryIcon';
import QualityIcon from '@/components/icons/QualityIcon';
import RangeIcon from '@/components/icons/RangeIcon';

export const ADVATAGES: IAdvatage[] = [
  {
    Icon: DeliveryIcon,
    title: 'Доставка',
    desc: 'Мы доставляем продукцию по всей Беларуси',
  },
  {
    Icon: QualityIcon,
    title: 'Сжатые сроки',
    desc: 'Ценим ваше время, соблюдение всех сроков',
  },
  {
    Icon: RangeIcon,
    title: 'Ассортимент',
    desc: 'Широкий выбор мульчирующих материалов',
  },
];
