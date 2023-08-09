import Accordion from '@/components/UI/Accordion/Accordion';
import styles from './PlantsSection.module.scss';
import { memo } from 'react';
import { PLANTS } from '@/constants/plants';
import Button from '@/components/UI/Button/Button';
import InstagramLogo from '@/components/icons/InstagramLogo';
import { A1_NUMBER, INSTAGRAM_LINK } from '@/constants';
import { useInView } from 'react-intersection-observer';
import AccordionItem from '@/components/UI/Accordion/AccordionItem/AccordionItem';
import Table from '@/components/UI/Table/Table';

function PlantsSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      ref={ref}
      className={`container section ${styles.section} ${inView ? styles.section_animate : ''}`}
    >
      <h2 className={`title title_center ${styles.title}`}>Декоративные растения</h2>

      <p className={`subTitle ${styles.moreInfo}`}>
        За подробной информацией обращайтесь к нам по телефону:{' '}
        <span className={styles.number}>{A1_NUMBER}</span>
      </p>

      <Accordion className={styles.accordion}>
        {PLANTS.map(({ id, title, list }) => (
          <AccordionItem key={id} title={title}>
            <Table
              className={styles.tableInAccordion}
              firstColTitle="Наименование растения"
              data={list}
            />
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
