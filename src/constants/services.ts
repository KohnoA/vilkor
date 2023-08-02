import { ServicesDataType, ServicesDataTypeWithCategories } from '@/types';

export const SERVICES_LANDSCAPE: ServicesDataType[] = [
  {
    id: 1,
    title: 'Обслуживание газона',
    services: [
      {
        id: 1,
        name: 'Стрижка газона газонокосилкой',
        units: '100 м2',
        price: '20',
      },
      {
        id: 2,
        name: 'Стрижка газона триммером',
        units: '100 м2',
        price: '15',
      },
      {
        id: 3,
        name: 'Восстановление газона',
        units: 'м2',
        price: '3',
      },
      {
        id: 4,
        name: 'Аэрация газона',
        units: '100 м2',
        price: '15',
      },
      {
        id: 5,
        name: 'Скарификация/вертикуляция газона',
        units: '100 м2',
        price: '30',
      },
      {
        id: 6,
        name: 'Внесение удобрений',
        units: '10 м2',
        price: '15',
      },
      {
        id: 7,
        name: 'Химическая прополка газона, с учетом материалов',
        units: '100 м2',
        price: '25',
      },
    ],
  },
  {
    id: 2,
    title: 'Расчистка территории участка',
    services: [
      {
        id: 1,
        name: 'Удаление деревьев',
        units: 'шт',
        price: '10',
      },
      {
        id: 2,
        name: 'Демонтаж строений',
        units: 'шт',
        price: '100',
      },
      {
        id: 3,
        name: 'Уборка мусора',
        units: '100 м2',
        price: '50',
      },
      {
        id: 4,
        name: 'Выкорчевка пней',
        units: 'шт',
        price: '15',
      },
      {
        id: 5,
        name: 'Покос травы и удаление бурьяна',
        units: '100 м2',
        price: '10',
      },
      {
        id: 6,
        name: 'Вспашка участка культиватором',
        units: '100 м2',
        price: '50',
      },
    ],
  },
  {
    id: 3,
    title: 'Озеленение',
    services: [
      {
        id: 1,
        name: 'Посадка деревьев',
        units: 'шт',
        price: '10',
      },
      {
        id: 2,
        name: 'Посадка крупномеров',
        units: 'шт',
        price: '50',
      },
      {
        id: 3,
        name: 'Посадка кустарников',
        units: 'шт',
        price: '5',
      },
      {
        id: 4,
        name: 'Устройство газона под ключ',
        units: 'м2',
        price: '6',
      },
      {
        id: 5,
        name: 'Создание клумб',
      },
      {
        id: 6,
        name: 'Создание рокариев и альпийских горок',
        units: 'м2',
        price: '75',
      },
      {
        id: 7,
        name: 'Посадка живой изгороди',
        units: 'м.пог',
        price: '20',
      },
      {
        id: 8,
        name: 'Посадка розария',
        units: 'м2',
        price: '30',
      },
    ],
  },
  {
    id: 4,
    title: 'Благоустройство',
    services: [
      {
        id: 1,
        name: 'Монтаж ливневой канализации',
        units: 'пог.м',
        price: '10',
      },
      {
        id: 2,
        name: 'Монтаж дождеприемника',
        units: 'шт',
        price: '20',
      },
      {
        id: 3,
        name: 'Устройство дренажной системы',
        units: 'м.пог',
        price: '10',
      },
      {
        id: 4,
        name: 'Укладка тротуарной плитки',
        units: 'м2',
        price: '20',
      },
      {
        id: 5,
        name: 'Установка борта бетонного',
        units: 'шт',
        price: '10',
      },
      {
        id: 6,
        name: 'Установка борта пластикового',
        units: 'пог.м',
        price: '3',
      },
      {
        id: 7,
        name: 'Прокладка кабеля под ландшафтное освещение',
        units: 'пог.м',
        price: '5',
      },
      {
        id: 8,
        name: 'Монтаж системы автоматического полива',
        units: '100 м2',
        price: '250',
      },
      {
        id: 9,
        name: 'Устройство декоративных водоемов, водоподов, ручьев',
      },
    ],
  },
];

// export const SERVICES_DISMANTLING: AccordionContentType = [
//   {
//     id: 1,
//     title: 'Демонтаж стен',
//     list: [
//       {
//         id: 1,
//         name: 'Демонтаж кирпичных стен (перегородок), толщина (1/4 кирпича)',
//         explanation: 'м2 от 5 ',
//       },
//       {
//         id: 2,
//         name: 'Демонтаж кирпичных стен (перегородок), толщина (1/2 кирпича)',
//         explanation: 'м2 от 5 ',
//       },
//       {
//         id: 3,
//         name: 'Демонтаж кирпичных стен (перегородок), толщина 1 кирпич',
//         explanation: 'м2 от 5 ',
//       },
//       {
//         id: 4,
//         name: 'Демонтаж кирпичных стен (перегородок), толщина 1,5 кирпича',
//         explanation: 'м2 от 6 ',
//       },
//       {
//         id: 5,
//         name: 'Демонтаж кирпичных стен (перегородок), толщина 2 кирпича',
//         explanation: 'м2 от 8 ',
//       },
//       {
//         id: 6,
//         name: 'Демонтаж стен (перегородок) из ГКЛ (гибсокартона) с сохранением металлокаркаса',
//         explanation: 'м2 от 4 ',
//       },
//       {
//         id: 7,
//         name: 'Демонтаж стен (перегородок) из ГКЛ (гибсокартона) без сохранением металлокаркаса',
//         explanation: 'м2 от 6 ',
//       },
//       {
//         id: 8,
//         name: 'Демонтаж деревянных стен (перегородок) до 100мм',
//         explanation: 'м2 от 2 ',
//       },
//       {
//         id: 9,
//         name: 'Демонтаж стен (перегородок) из газобетонного блока, гипсовых плит',
//         explanation: 'м2 от 4 ',
//       },
//       {
//         id: 10,
//         name: 'Демонтаж стен (перегородок) из пеноблока, керамзитобетонных стен',
//         explanation: 'м2 от 4 ',
//       },
//       {
//         id: 11,
//         name: 'Демонтаж стен (перегородок) из ГСБ (газосиликатный блок) до 125мм',
//         explanation: 'м2 от 5 ',
//       },
//       {
//         id: 12,
//         name: 'Демонтаж стен (перегородок) из ГСБ (газосиликатный блок) от 125мм',
//         explanation: 'м2 от 6 ',
//       },
//       {
//         id: 13,
//         name: 'Демонтаж перегородок из монолита',
//         explanation: 'м2 от 10 ',
//       },
//       {
//         id: 14,
//         name: 'Демонтаж бетонных, ж/б стен (перегородок) 5-8 см',
//         explanation: 'м2 от 10 ',
//       },
//       {
//         id: 15,
//         name: 'Демонтаж бетонных, ж/б стен (перегородок) 8-12 см',
//         explanation: 'м2 от 10 ',
//       },
//       {
//         id: 16,
//         name: 'Демонтаж бетонных, ж/б стен (перегородок) от 12см',
//         explanation: 'м2 от 15 ',
//       },
//       {
//         id: 17,
//         name: 'Демонтаж стен (перегородок) из ДРАНКИ',
//         explanation: 'м2 от 1 ',
//       },
//       {
//         id: 18,
//         name: 'Демонтаж панелей ПВХ, вагонки (с каркасом) стены, потолок',
//         explanation: 'м2 от 5 ',
//       },
//       {
//         id: 19,
//         name: 'Прорезание проёма в бетонной стене и кирпичной кладке (под дверь)',
//         explanation: 'шт. от 38 ',
//       },
//       {
//         id: 20,
//         name: 'Очистка старой краски со стен',
//         explanation: 'м2 от 5 ',
//       },
//       {
//         id: 21,
//         name: 'Очистка масляной краски со стен',
//         explanation: 'м2 от 5 ',
//       },
//       {
//         id: 22,
//         name: 'Демонтаж слоя старых обоев со стен',
//         explanation: 'м2 от 1 ',
//       },
//       {
//         id: 23,
//         name: 'Очистка стен от «жидких» обоев',
//         explanation: 'м2 от 1.5 ',
//       },
//       {
//         id: 24,
//         name: 'Демонтаж плитки на стенах (без сохранения)',
//         explanation: 'м2 от 4 ',
//       },
//       {
//         id: 25,
//         name: 'Демонтаж балконного блока',
//         explanation: 'м2 от 10 ',
//       },
//       {
//         id: 26,
//         name: 'Демонтаж подоконной части стены из ПГП, пенобетона',
//         explanation: 'м2 от 25 ',
//       },
//       {
//         id: 27,
//         name: 'Демонтаж подоконной части стены из кирпича',
//         explanation: 'м2 от 50 ',
//       },
//       {
//         id: 28,
//         name: 'Демонтаж подоконной части стены из бетона, ж/б',
//         explanation: 'м2 от 50 ',
//       },
//       {
//         id: 29,
//         name: 'Демонтаж старой штукатурки',
//         explanation: 'м2 от 4 ',
//       },
//       {
//         id: 30,
//         name: 'Демонтаж маяков',
//         explanation: 'м2 от 1 ',
//       },
//       {
//         id: 31,
//         name: 'Снятие побелки',
//         explanation: 'м2 от 4 ',
//       },
//       {
//         id: 32,
//         name: 'Снятие шпаклевки со стен',
//         explanation: 'м2 от 4 ',
//       },
//       {
//         id: 33,
//         name: 'Демонтаж стены санузла (Место)',
//         explanation: 'м2 от 4 ',
//       },
//       {
//         id: 34,
//         name: 'Уборка и фасовка строительного мусора',
//         explanation: 'мешок от 50 коп.',
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: 'Демонтаж пола',
//     list: [
//       {
//         id: 1,
//         name: 'Демонтаж пола',
//         explanation: 'м2 от 8 ',
//       },
//       {
//         id: 2,
//         name: 'Демонтаж бетонной стяжки до 5см (армированный)',
//         explanation: 'м2 от 12 ',
//       },
//       {
//         id: 3,
//         name: 'Демонтаж бетонной стяжки от 5 до 7 см.',
//         explanation: 'м2 от 14 ',
//       },
//       {
//         id: 4,
//         name: 'Демонтаж бетонной стяжки от 7 до 15 см.',
//         explanation: 'м2 от 12 ',
//       },
//       {
//         id: 5,
//         name: 'Снятие цементной стяжки пола до 5 см.',
//         explanation: 'м2 от 11 ',
//       },
//       {
//         id: 6,
//         name: 'Снятие цементной стяжки пола от 5см и выше',
//         explanation: 'м2 от 12 ',
//       },
//       {
//         id: 7,
//         name: 'Демонтаж наливного пола',
//         explanation: 'м2 от 12 ',
//       },
//       {
//         id: 8,
//         name: 'Демонтаж асфальта',
//         explanation: 'м2 от 10 ',
//       },
//       {
//         id: 9,
//         name: 'Разборка деревянного пола на лагах(из доски) ',
//         explanation: 'м2 от 12 ',
//       },
//       {
//         id: 10,
//         name: 'Разборка полов из щитового паркета(с лагами)  ',
//         explanation: 'м2 от 12 ',
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: 'Демонтаж фундамента',
//     list: [
//       {
//         id: 1,
//         name: 'Железобетонный фундамент (марка бетона до М250)',
//         explanation: 'м3 от 60 ',
//       },
//       {
//         id: 2,
//         name: 'Железобетонный фундамент (марка бетона выше М250)',
//         explanation: 'м3 от 65 ',
//       },
//       {
//         id: 3,
//         name: 'Демонтаж бутового фундамента',
//         explanation: 'м3 от 50 ',
//       },
//       {
//         id: 4,
//         name: 'Демонтаж кирпичного фундамента',
//         explanation: 'м3 от 35 ',
//       },
//       {
//         id: 5,
//         name: 'Демонтаж блочного (ФБС) фундамента',
//         explanation: 'м3 от 50 ',
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: 'Демонтаж заборов',
//     list: [
//       {
//         id: 1,
//         name: 'Забор из профнастила',
//         explanation: 'м.п. от 6 ',
//       },
//       {
//         id: 2,
//         name: 'Деревянный штакетник',
//         explanation: 'м.п. от 7 ',
//       },
//       {
//         id: 3,
//         name: 'Евроштакетник',
//         explanation: 'м.п. от 9 ',
//       },
//       {
//         id: 4,
//         name: 'Железобетонный забор',
//         explanation: 'договорная',
//       },
//       {
//         id: 5,
//         name: 'Забор из сетки-рабица',
//         explanation: 'м.п. от 3 ',
//       },
//       {
//         id: 6,
//         name: 'Кирпичный забор',
//         explanation: 'м2 от 11 ',
//       },
//       {
//         id: 7,
//         name: 'Металлический забор',
//         explanation: 'м.п. от 9 ',
//       },
//       {
//         id: 8,
//         name: 'Ворота с забивными столбами',
//         explanation: 'шт. от 25 ',
//       },
//       {
//         id: 9,
//         name: 'Калитка с забивными столбами',
//         explanation: 'шт. от 13 ',
//       },
//       {
//         id: 10,
//         name: 'Ворота с бетонированными столбами',
//         explanation: 'шт. от 50 ',
//       },
//       {
//         id: 11,
//         name: 'Калитка с бетонированными столбами',
//         explanation: 'шт. от 31 ',
//       },
//     ],
//   },
// ];

export const SERVICES_CONSTRUCTION: ServicesDataTypeWithCategories[] = [
  {
    id: 1,
    category: 'Демонтаж',
    list: [
      {
        id: 1,
        title: 'Демонтаж стен',
        services: [
          {
            id: 1,
            name: 'Демонтаж кирпичных стен (перегородок), толщина (1/4 кирпича)',
            units: 'м2',
            price: '5 ',
          },
          {
            id: 2,
            name: 'Демонтаж кирпичных стен (перегородок), толщина (1/2 кирпича)',
            units: 'м2',
            price: '5 ',
          },
          {
            id: 3,
            name: 'Демонтаж кирпичных стен (перегородок), толщина 1 кирпич',
            units: 'м2',
            price: '5 ',
          },
        ],
      },
      {
        id: 2,
        title: 'Демонтаж пола',
        services: [],
      },
      {
        id: 3,
        title: 'Демонтаж фундамента',
        services: [],
      },
      {
        id: 4,
        title: 'Демонтаж заборов',
        services: [],
      },
    ],
  },
  {
    id: 2,
    category: 'Бетонные работы',
    list: [],
  },
  {
    id: 3,
    category: 'Кровельные работы',
    list: [],
  },
  {
    id: 4,
    category: 'Отделочные работы',
    list: [],
  },
  {
    id: 5,
    category: 'Облицовочные работы',
    list: [],
  },
  {
    id: 6,
    category: 'Сантехнические работы',
    list: [],
  },
  {
    id: 7,
    category: 'Электромонтажные работы',
    list: [],
  },
  {
    id: 8,
    category: 'Устройство полов',
    list: [],
  },
];
