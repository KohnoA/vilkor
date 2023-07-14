import { useEffect, useMemo, useState } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import Logo from '@/components/icons/Logo';
import { IconColor, AppRoutes, A1_NUMBER, A1_NUMBER_REF } from '@/constants';
import SocialsList from '@/components/SocialsList';
import Dropdown from '../Dropdown/Dropdown';
import { useRouter } from 'next/router';
import { PRODUCTS } from '@/constants/products';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const STICKY_POINT = 100;

export default function Header() {
  const { pathname } = useRouter();
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const [isStickHeader, setIsStickHeader] = useState<boolean>(false);
  const isMainPage = pathname === AppRoutes.MAIN;

  const dropdownContent = useMemo(() => {
    return PRODUCTS.map(({ title, category }) => ({
      title,
      link: `${AppRoutes.PRODUCTS}/${category}`,
    }));
  }, []);

  const showProductsDropdown = () => setIsDropdown(true);

  const closeProductsDropdown = () => setIsDropdown(false);

  useEffect(() => {
    if (isMainPage) {
      const scrollHandler = () => setIsStickHeader(window.scrollY > STICKY_POINT);

      window.addEventListener('scroll', scrollHandler);

      return () => window.removeEventListener('scroll', scrollHandler);
    }
  }, [isMainPage]);

  return (
    <header
      className={`${styles.header} ${isMainPage ? styles.header_onMain : styles.header_notOnMain} ${
        isStickHeader ? styles.header_stick : ''
      }`}
    >
      <nav className={`container ${styles.nav}`}>
        <ul className={styles.nav__list}>
          <li
            className={styles.nav__item}
            onMouseOut={closeProductsDropdown}
            onBlur={closeProductsDropdown}
            onMouseOver={showProductsDropdown}
            onFocus={showProductsDropdown}
          >
            <Link href={AppRoutes.PRODUCTS} className={styles.nav__link}>
              Товары
            </Link>

            <Dropdown
              closeHanlder={closeProductsDropdown}
              isShow={isDropdown}
              items={dropdownContent}
            />
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

        <BurgerMenu />
      </nav>
    </header>
  );
}
