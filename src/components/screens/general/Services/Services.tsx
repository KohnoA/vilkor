import styles from './Services.module.scss';
import { A1_NUMBER, AppRoutes } from '@/constants';
import Accordion from '@/components/UI/Accordion/Accordion';
import { useInView } from 'react-intersection-observer';
import { SERVICES_LANDSCAPE, SERVICES_CONSTRUCTION } from '@/constants/services';
import AccordionItem from '@/components/UI/Accordion/AccordionItem/AccordionItem';
import { useMemo } from 'react';
import Table from '@/components/UI/Table/Table';
import FakeAccordionItem from '@/components/UI/Accordion/AccordionItem/FakeAccordionItem';

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const landscapeTableHead = useMemo(() => ['Наименование услуги', 'Цена за', 'Цена от'], []);

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

      <Accordion className={styles.accordion} title="Строительные работы">
        {SERVICES_CONSTRUCTION.map(({ id, category }) => (
          <FakeAccordionItem key={id} title={category} link={`${AppRoutes.SERVICES}/${category}`} />
        ))}
      </Accordion>

      <Accordion className={styles.accordion} title="Ландшафтные работы">
        {SERVICES_LANDSCAPE.map(({ id, title, services }) => (
          <AccordionItem key={id} title={title}>
            <Table head={landscapeTableHead} data={services} />
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
