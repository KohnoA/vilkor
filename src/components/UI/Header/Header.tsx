import React, { useEffect, useMemo, useState } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import Logo from '@/components/icons/Logo';
import { IconColor, AppRoutes } from '@/constants';
import SocialsList from '@/components/SocialsList';
import Dropdown from '../Dropdown';

export default function Header() {
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const [isStickHeader, setIsStickHeader] = useState<boolean>(false);

  const dropdownContent = useMemo(() => {
    return [
      { link: '#', content: 'Сосновая кора' },
      { link: '#', content: 'Мульчирующие материалы' },
      { link: '#', content: 'Декоративные растения' },
      { link: '#', content: 'Торф' },
    ];
  }, []);

  const scrollHandler = () => setIsStickHeader(window.scrollY > 100);

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
            <Link href={AppRoutes.goods} className={styles.nav__link}>
              Товары
            </Link>

            <Dropdown isShow={isDropdown} items={dropdownContent} />
          </li>
          <li className={styles.nav__item}>
            <Link href={AppRoutes.services} className={styles.nav__link}>
              Услуги
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href={AppRoutes.contacts} className={styles.nav__link}>
              Контакты
            </Link>
          </li>
        </ul>

        <Link href={AppRoutes.main} className={styles.nav__logo}>
          <Logo color={IconColor.white} />
        </Link>

        <div className={styles.nav__socials}>
          <SocialsList color={IconColor.white} />
        </div>
      </nav>
    </header>
  );
}
