import styles from './Services.module.scss';
import { A1_NUMBER } from '@/constants';
import Accordion from '../UI/Accordion/Accordion';
import { useInView } from 'react-intersection-observer';
import { SERVICES_LANDSCAPE, SERVICES_DISMANTLING } from '@/constants/services';

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={ref}
      className={`container section ${styles.section} ${inView ? styles.section_animate : ''}`}
    >
      <h2 className={`title title_center ${styles.title}`}>Наши услуги</h2>

      <p className={`subTitle ${styles.moreInfo}`}>
        За подробной информацией обращайтесь к нам по телефону:{' '}
        <span className={styles.number}>{A1_NUMBER}</span>
      </p>

      <div className={styles.group}>
        <h4 className={`title title_left ${styles.subtitle}`}>Ландшафтные и строительные работы</h4>
        <Accordion className={styles.accordion} content={SERVICES_LANDSCAPE} />
      </div>

      <div className={styles.group}>
        <h4 className={`title title_left ${styles.subtitle}`}>Демонтаж</h4>
        <Accordion className={styles.accordion} content={SERVICES_DISMANTLING} />
      </div>
    </section>
  );
}
