import Accordion from '@/components/UI/Accordion/Accordion';
import styles from './PlantsSection.module.scss';
import { memo, useMemo } from 'react';
import { PLANTS } from '@/constants/plants';
import Button from '@/components/UI/Button/Button';
import InstagramLogo from '@/components/icons/InstagramLogo';
import { INSTAGRAM_LINK } from '@/constants';
import { useInView } from 'react-intersection-observer';
import AccordionItem from '@/components/UI/Accordion/AccordionItem/AccordionItem';
import Table from '@/components/UI/Table/Table';

function PlantsSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  const plantsTableHead = useMemo(() => ['Наименование растения', 'Цена за', 'Цена от'], []);

  return (
    <section
      ref={ref}
      className={`container section ${styles.section} ${inView ? styles.section_animate : ''}`}
    >
      <Accordion className={styles.accordion} title="Декоративные растения">
        {PLANTS.map(({ id, title, list }) => (
          <AccordionItem key={id} title={title}>
            <Table head={plantsTableHead} data={list} />
          </AccordionItem>
        ))}
      </Accordion>

      <p className={styles.copyrightDesc}>
        Фотографии декоративных растений и более подробную информацию (о их посадке, уходе и т.д),
        можно увидеть у нас в инстаграме!
      </p>

      <div className={styles.buttonWrapper}>
        <Button href={INSTAGRAM_LINK}>
          <InstagramLogo /> Наш Инстаграм
        </Button>
      </div>
    </section>
  );
}

export default memo(PlantsSection);
