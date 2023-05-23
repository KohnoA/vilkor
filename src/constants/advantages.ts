import { IAdvatages } from '@/types';
import DeliveryIcon from '@/components/icons/DeliveryIcon';
import QualityIcon from '@/components/icons/QualityIcon';
import RangeIcon from '@/components/icons/RangeIcon';

export const ADVATAGES: IAdvatages = {
  title: 'Почему именно мы?',
  tagline: 'Более 3-ёх лет успешной работы',
  list: [
    {
      icon: DeliveryIcon,
      title: 'Доставка',
      desc: 'Мы доставляем продукцию по всей Беларуси в удобное для вас время.',
    },
    {
      icon: QualityIcon,
      title: 'Качество',
      desc: 'Качественное обслуживание и уважение к каждому покупателю.',
    },
    {
      icon: RangeIcon,
      title: 'Ассортимент',
      desc: 'Широкий выбор сосновой коры и мульчирующего материала.',
    },
  ],
};
