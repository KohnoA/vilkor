import React from 'react';
import styles from './Contacts.module.scss';
import { A1_NUMBER, A1_NUMBER_REF, ADRESS, ADRESS_MAP, BusinessInfo, IconColor } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import A1Img from '@/assets/images/logo-a1.png';
import SocialsList from '../SocialsList/SocialsList';
import DeliveryIcon from '../icons/DeliveryIcon';

export default function Contacts() {
  return (
    <section className={`section ${styles.contacts}`}>
      <div className={`container ${styles.contacts__wrapper}`}>
        <div className={styles.contacts__info}>
          <h3 className={`title title_left`}>Контактная информация</h3>

          <ul>
            <li className={styles.contacts__item}>
              <Link href={A1_NUMBER_REF} className={styles.contacts__number}>
                <Image src={A1Img} width={18} height={18} alt="Мобильный оператор А1" /> {A1_NUMBER}
              </Link>
            </li>

            <li className={styles.contacts__item}>
              <p className={styles.contacts__item_header}>Мы в социальных сетях:</p>
              <SocialsList full color={IconColor.GREEN} />
            </li>

            <li className={styles.contacts__item}>
              <p className={styles.contacts__item_header}>Адрес производства:</p>
              <p className={styles.contacts__item_desc}>{ADRESS}</p>
            </li>

            <li className={`${styles.contacts__item} ${styles.contacts__mark}`}>
              <DeliveryIcon width={20} height={20} />
              <p>Осуществляем доставку по всей Беларуси!</p>
            </li>

            <li className={styles.contacts__item}>
              <p>{BusinessInfo.IP}</p>
              <p>{BusinessInfo.OPN}</p>
            </li>
          </ul>
        </div>

        <iframe
          className={styles.contacts__map}
          src={ADRESS_MAP}
          title="Адрес производства"
        ></iframe>
      </div>
    </section>
  );
}
