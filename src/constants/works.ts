import { IWork } from '@/types';
import testImg from 'public/images/background.jpg';
import test2Img from 'public/images/dec-rast-slide.jpg';

// bark
import bark1 from 'public/images/work-bark.jpg';
import bark2 from 'public/images/work-bark-2.jpg';
import bark3 from 'public/images/work-bark-3.jpg';

// parquet
import parquet1 from 'public/images/work-parquet.jpg';
import parquet2 from 'public/images/work-parquet-2.jpg';
import parquet3 from 'public/images/work-parquet-3.jpg';

// roof
import roof1 from 'public/images/work-roof.jpg';
import roof2 from 'public/images/work-roof-2.jpg';
import roof3 from 'public/images/work-roof-3.jpg';

export const WORKS: IWork[] = [
  {
    title: 'Сосновая кора в ландшафте',
    desc: 'Наши специалисты помогут создать гармоничную атмосферу согласно Вашему вкусу и проектному плану.',
    images: [bark1, bark2, bark3],
  },
  {
    title: 'Паркетные работы',
    desc: 'Мы осуществляем укладку и ремонт паркета любой сложности. Оперативно и качественно с помощью профессионального оборудования, по выгодным ценам!',
    images: [parquet1, parquet2, parquet3],
  },
  {
    title: 'Кровельные работы',
    desc: 'Доверяя работу нашим специалистам Вы можете быть уверены, что неполадок в устройстве кровли спустя много лет обнаружено не будет, а это избавит Вас от последующих расходов на ремонт кровли.',
    images: [roof1, roof2, roof3],
  },
  {
    title: 'Электромонтажные работы',
    desc: 'Квалифицированные мастера компании осуществляют электромонтажные работы в загородных домах, квартирах и подсобных помещениях, а также на коммерческих предприятиях, производственных складах.',
    images: [testImg, test2Img, testImg],
  },
];
