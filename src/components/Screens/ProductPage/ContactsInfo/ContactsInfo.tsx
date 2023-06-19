import Image from 'next/image';
import styles from './ContactsInfo.module.scss';
import Link from 'next/link';
import { A1_NUMBER, A1_NUMBER_REF, IconColor } from '@/constants';
import SocialsList from '@/components/SocialsList/SocialsList';
import a1Logo from 'public/images/logo-a1.png';

export default function ContactsInfo() {
  return (
    <div>
      <div className={styles.number}>
        <p className={styles.number__desc}>Позвонить с сайта:</p>
        <Link href={A1_NUMBER_REF} className={styles.number__link}>
          <Image src={a1Logo} width={20} height={20} sizes="50px" alt="Мобильный оператор А1" />
          {A1_NUMBER}
        </Link>
      </div>

      <div className={styles.socials}>
        <p className={styles.socials__desc}>Принимаем заказы в социальных сетях:</p>
        <SocialsList full color={IconColor.GREEN} />
      </div>

      <p className={styles.mark}>Осуществляем доставку по всей Беларуси!</p>
    </div>
  );
}
