import styles from './Services.module.scss';
import { A1_NUMBER } from '@/constants';
import { AccordionContentType } from '@/types';
import Accordion from '../UI/Accordion/Accordion';

interface ServicesProps {
  content: AccordionContentType;
}

export default function Services({ content }: ServicesProps) {
  return (
    <section className={`container section`}>
      <h2 className={`title title_center ${styles.title}`}>Наши услуги</h2>

      <p className={styles.moreInfo}>
        За подробной информацией обращайтесь к нам по телефону: {A1_NUMBER}
      </p>

      <Accordion content={content} />
    </section>
  );
}
