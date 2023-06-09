import styles from './Contacts.module.scss';
import { A1_NUMBER, A1_NUMBER_REF, ADRESS, AppTheme, BusinessInfo, IconColor } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import A1Img from 'public/images/logo-a1.png';
import SocialsList from '../SocialsList/SocialsList';
import DeliveryIcon from '../icons/DeliveryIcon';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';

const YMap = dynamic(() => import('./YMap/YMap'), { ssr: false });

interface ContactsProps {
  theme: AppTheme;
}

export default function Contacts({ theme }: ContactsProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className={`section container ${styles.section} ${inView ? styles.section_animate : ''} ${
        theme === AppTheme.DARK ? styles.section_dark : styles.section_light
      }`}
    >
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h3 className={`title title_left ${styles.title}`}>Контактная информация</h3>

          <ul>
            <li className={styles.item}>
              <Link href={A1_NUMBER_REF} className={styles.number}>
                <Image
                  src={A1Img}
                  width={20}
                  height={20}
                  sizes="50px"
                  alt="Мобильный оператор А1"
                />{' '}
                {A1_NUMBER}
              </Link>
            </li>

            <li className={styles.item}>
              <p className={styles.item__header}>Мы в социальных сетях:</p>
              <SocialsList className={styles.socials} full color={IconColor.GREEN} />
            </li>

            <li className={styles.item}>
              <p className={styles.item__header}>Адрес производства:</p>
              <p className={styles.item__desc}>{ADRESS}</p>
            </li>

            <li className={`${styles.item} ${styles.mark}`}>
              <DeliveryIcon width={20} height={20} color={IconColor.WHITE} />
              <p>Осуществляем доставку по всей Беларуси!</p>
            </li>

            <li className={styles.item}>
              <p>{BusinessInfo.IP}</p>
              <p>{BusinessInfo.OPN}</p>
            </li>
          </ul>
        </div>

        <YMap className={styles.map} />
      </div>
    </section>
  );
}
