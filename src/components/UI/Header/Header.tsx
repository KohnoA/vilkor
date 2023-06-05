import React, { useEffect, useMemo, useState } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import Logo from '@/components/icons/Logo';
import { IconColor, AppRoutes, A1_NUMBER, A1_NUMBER_REF } from '@/constants';
import SocialsList from '@/components/SocialsList';
import Dropdown from '../Dropdown';

export default function Header() {
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const [isStickHeader, setIsStickHeader] = useState<boolean>(false);
  const STICKY_POINT = 100;

  const dropdownContent = useMemo(() => {
    return [
      { link: '#', content: 'Сосновая кора' },
      { link: '#', content: 'Мульчирующие материалы' },
      { link: '#', content: 'Декоративные растения' },
      { link: '#', content: 'Торф' },
    ];
  }, []);

  const scrollHandler = () => setIsStickHeader(window.scrollY > STICKY_POINT);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <header className={`${styles.header} ${isStickHeader ? styles.header_stick : ''}`}>
      <nav className={`container ${styles.nav}`}>
        <ul className={styles.nav__list}>
          <li
            className={styles.nav__item}
            onMouseOut={() => setIsDropdown(false)}
            onBlur={() => setIsDropdown(false)}
            onMouseOver={() => setIsDropdown(true)}
            onFocus={() => setIsDropdown(true)}
          >
            <Link href={AppRoutes.GOODS} className={styles.nav__link}>
              Товары
            </Link>

            <Dropdown isShow={isDropdown} items={dropdownContent} />
          </li>
          <li className={styles.nav__item}>
            <Link href={AppRoutes.SERVICES} className={styles.nav__link}>
              Услуги
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href={AppRoutes.CONTACTS} className={styles.nav__link}>
              Контакты
            </Link>
          </li>
        </ul>

        <Link href={AppRoutes.MAIN} className={styles.nav__logo}>
          <Logo color={IconColor.WHITE} />
        </Link>

        <div className={styles.nav__contacts}>
          <Link className={styles.nav__number} href={A1_NUMBER_REF}>
            {A1_NUMBER}
          </Link>

          <SocialsList color={IconColor.WHITE} />
        </div>
      </nav>
    </header>
  );
}
