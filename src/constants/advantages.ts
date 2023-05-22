import InstagramLogo from '@/components/icons/InstagramLogo';
import { IAdvatages } from '@/types';

export const ADVATAGES: IAdvatages = {
  title: 'Почему именно мы?',
  tagline: 'Более 3-ёх лет успешной работы',
  list: [
    {
      icon: InstagramLogo,
      title: 'Доставка',
      desc: 'Мы доставляем продукцию по всей Беларуси в удобное для вас время.',
    },
    {
      icon: InstagramLogo,
      title: 'Качество',
      desc: 'Качественное обслуживание и уважение к каждому покупателю.',
    },
    {
      icon: InstagramLogo,
      title: 'Ассортимент',
      desc: 'Широкий выбор сосновой коры и мульчирующего материала.',
    },
  ],
};
