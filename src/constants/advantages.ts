import { IAdvatage } from '@/types';
import DeliveryIcon from '@/components/icons/DeliveryIcon';
import QualityIcon from '@/components/icons/QualityIcon';
import RangeIcon from '@/components/icons/RangeIcon';

export const ADVATAGES: IAdvatage[] = [
  {
    Icon: DeliveryIcon,
    title: 'Доставка',
    desc: 'Мы доставляем продукцию по всей Беларуси в удобное для вас время.',
  },
  {
    Icon: QualityIcon,
    title: 'Качество',
    desc: 'Качественное обслуживание и уважение к каждому покупателю.',
  },
  {
    Icon: RangeIcon,
    title: 'Ассортимент',
    desc: 'Широкий выбор сосновой коры и мульчирующего материала.',
  },
];
