import { IServicesGroup } from '@/types';

export const SERVICES: IServicesGroup[] = [
  {
    title: 'Обслуживание газона',
    services: [
      {
        service: 'Стрижка газона газонокосилкой',
        price: 'от 20 руб./100 м2',
      },
      {
        service: 'Стрижка газона триммером',
        price: 'от 15 руб./100 м2',
      },
      {
        service: 'Восстановление газона',
        price: 'от 3 руб./м2',
      },
      {
        service: 'Аэрация газона',
        price: '15 руб./100 м2',
      },
      {
        service: 'Скарификация/вертикуляция газона',
        price: '30 руб./100 м2',
      },
      {
        service: 'Внесение удобрений',
        price: 'от 15 руб./10 м2',
      },
      {
        service: 'Химическая прополка газона, с учетом материалов',
        price: 'от 25 руб./100 м2',
      },
    ],
  },
  {
    title: 'Расчистка территории участка',
    services: [
      {
        service: 'Удаление деревьев',
        price: 'от 10 руб./шт.',
      },
      {
        service: 'Демонтаж строений',
        price: 'от 100 руб./шт.',
      },
      {
        service: 'Уборка мусора',
        price: 'от 50 руб./100 м2',
      },
      {
        service: 'Выкорчевка пней',
        price: 'от 15 руб./шт.',
      },
      {
        service: 'Покос травы и удаление бурьяна',
        price: 'от 10 руб./100 м2',
      },
      {
        service: 'Вспашка участка культиватором',
        price: 'от 50 руб./100 м2',
      },
    ],
  },
  {
    title: 'Озеленение',
    services: [
      {
        service: 'Посадка деревьев',
        price: 'от 10 руб./шт',
      },
      {
        service: 'Посадка крупномеров',
        price: 'от 50 руб./шт',
      },
      {
        service: 'Посадка кустарников',
        price: 'от 5 руб./шт',
      },
      {
        service: 'Устройство газона под ключ',
        price: 'от 6 руб./м2',
      },
      {
        service: 'Создание клумб',
        price: 'договорная',
      },
      {
        service: 'Создание рокариев и альпийских горок',
        price: 'от 75 руб./м2',
      },
      {
        service: 'Посадка живой изгороди',
        price: 'от 20 руб./м.пог.',
      },
      {
        service: 'Посадка розария',
        price: 'от 30 руб./м2',
      },
    ],
  },
  {
    title: 'Благоустройство',
    services: [
      {
        service: 'Монтаж ливневой канализации',
        price: 'от 10 руб./пог.м.',
      },
      {
        service: 'Монтаж дождеприемника',
        price: 'от 20 руб./шт.',
      },
      {
        service: 'Устройство дренажной системы',
        price: 'от 10 руб./м.пог.',
      },
      {
        service: 'Укладка тротуарной плитки',
        price: 'от 20 руб./м2',
      },
      {
        service: 'Установка борта бетонного',
        price: 'от 10 руб./шт',
      },
      {
        service: 'Установка борта пластикового',
        price: 'от 3 руб./пог.м.',
      },
      {
        service: 'Прокладка кабеля под ландшафтное освещение',
        price: 'от 5 руб./пог.м.',
      },
      {
        service: 'Монтаж системы автоматического полива',
        price: 'от 250 руб./100м2',
      },
      {
        service: 'Устройство декоративных водоемов, водоподов, ручьев',
        price: 'договорная',
      },
    ],
  },
];