import styles from './Services.module.scss';
import { A1_NUMBER } from '@/constants';
import { AccordionContentType } from '@/types';
import Accordion from '../UI/Accordion/Accordion';
import { useInView } from 'react-intersection-observer';

interface ServicesProps {
  content: AccordionContentType;
}

export default function Services({ content }: ServicesProps) {
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

      <Accordion className={styles.accordion} content={content} />
    </section>
  );
}
