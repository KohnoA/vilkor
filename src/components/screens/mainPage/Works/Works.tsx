import styles from './Works.module.scss';
import Button from '@/components/UI/Button/Button';
import { IWork } from '@/types';
import { INSTAGRAM_LINK } from '@/constants';
import WorkItem from './WorkItem/WorkItem';
import { useInView } from 'react-intersection-observer';

interface WorksProps {
  content: IWork[];
}

export default function Works({ content }: WorksProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={`container section ${styles.section} ${inView ? styles.section_animate : ''}`}
    >
      <h3 className={`title title_center ${styles.title}`}>Наши работы</h3>
      <p className={styles.desc}>
        Мы поможем реализовать ваши желания или предложить свои варианты благоустройства вашего дома
      </p>

      <ul className={styles.list} role="tablist">
        {content.map((work, index) => (
          <WorkItem
            className={styles.item}
            style={{ transitionDelay: `0.${index * 2}s` }}
            key={index}
            content={work}
          />
        ))}
      </ul>

      <Button href={INSTAGRAM_LINK} additionalClasses={styles.button}>
        Увидеть больше &rsaquo;
      </Button>
    </section>
  );
}
