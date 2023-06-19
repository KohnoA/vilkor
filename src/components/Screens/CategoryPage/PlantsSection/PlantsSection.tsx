import Accordion from '@/components/UI/Accordion/Accordion';
import styles from './PlantsSection.module.scss';
import { memo, useMemo } from 'react';
import { PLANTS } from '@/constants/plants';
import Button from '@/components/UI/Button/Button';
import InstagramLogo from '@/components/icons/InstagramLogo';
import { INSTAGRAM_LINK } from '@/constants';

function PlantsSection() {
  const plantsContent = useMemo(() => PLANTS, []);

  return (
    <section className="container section">
      <h2 className={`title title_center ${styles.title}`}>Декоративные растения</h2>

      <Accordion content={plantsContent} />

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
