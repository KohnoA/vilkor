import styles from './Works.module.scss';
import Button from '../UI/Button/Button';
import { IWork } from '@/types';
import { INSTAGRAM_LINK } from '@/constants';
import WorkItem from './WorkItem/WorkItem';

interface WorksProps {
  content: IWork[];
}

export default function Works({ content }: WorksProps) {
  return (
    <section className={`container section ${styles.section}`}>
      <h3 className={`title title_center ${styles.title}`}>Наши работы</h3>
      <p className={styles.desc}>
        Мы поможем реализовать ваши желания или предложить свои варианты тюнинга вашего автомобиля
      </p>

      <ul className={styles.list}>
        {content.map((work, index) => (
          <WorkItem key={index} content={work} />
        ))}
      </ul>

      <Button href={INSTAGRAM_LINK}>Увидеть больше &rsaquo;</Button>
    </section>
  );
}
