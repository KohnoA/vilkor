import Gallery from '@/components/UI/Gallery/Gallery';
import styles from './ModalContent.module.scss';
import { StaticImageData } from 'next/image';
import Button from '@/components/UI/Button/Button';
import InstagramLogo from '@/components/icons/InstagramLogo';
import { INSTAGRAM_LINK, IconColor } from '@/constants';

interface ModalContentProps {
  images: StaticImageData[];
  title: string;
  desc: string;
}

export default function ModalContent({ images, title, desc }: ModalContentProps) {
  return (
    <div className={styles.container}>
      <Gallery images={images} />

      <div className={styles.info}>
        <div>
          <p className={`title title_left ${styles.title}`}>{title}</p>
          <p>{desc}</p>
        </div>

        <div className={styles.more}>
          <p className={styles.moreDesc}>
            Хотите увидеть больше наших работ? <br /> Тогда переходите к нам в инстаграм!
          </p>
          <Button href={INSTAGRAM_LINK}>
            <InstagramLogo color={IconColor.WHITE} /> Наш Инстаграм
          </Button>
        </div>
      </div>
    </div>
  );
}
