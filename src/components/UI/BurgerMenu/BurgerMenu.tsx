import { memo, useMemo, useState } from 'react';
import styles from './BurgerMenu.module.scss';
import Link from 'next/link';
import { A1_NUMBER, A1_NUMBER_REF, AppRoutes, IconColor } from '@/constants';
import SocialsList from '@/components/SocialsList/SocialsList';
import A1Img from 'public/images/logo-a1.png';
import Image from 'next/image';
import { PRODUCTS } from '@/constants/products';
import DropdownItem from './DropdownItem/DropdownItem';

function BurgerMenu() {
  const [isActiveBurger, setIsActiveBurger] = useState<boolean>(false);

  const productsDropdown = useMemo(() => {
    return PRODUCTS.map(({ title, category }) => ({
      title,
      link: `${AppRoutes.PRODUCTS}/${category}`,
    })).concat({ title: 'Показать все', link: `${AppRoutes.PRODUCTS}` });
  }, []);

  const burgerToggler = () => setIsActiveBurger(!isActiveBurger);

  const keywordHandler = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.code === 'Enter') {
      burgerToggler();
    }
  };

  return (
    <div className={styles.container}>
      <button
        className={`${styles.burger} ${isActiveBurger ? styles.burger_active : ''}`}
        onClick={burgerToggler}
      >
        <span className={styles.burger__line} />
        <span className={styles.burger__line} />
        <span className={styles.burger__line} />
        <span className={styles.burger__line} />
      </button>

      <ul className={`${styles.list} ${isActiveBurger ? styles.list_active : ''}`}>
        <li className={styles.item}>
          <Link href={AppRoutes.MAIN} className={styles.link}>
            Главная
          </Link>
        </li>
        <DropdownItem
          header="Товары"
          content={productsDropdown}
          className={styles.item}
          isActiveBurger={isActiveBurger}
        />
        <li className={styles.item}>
          <Link href={AppRoutes.SERVICES} className={styles.link}>
            Услуги
          </Link>
        </li>
        <li className={styles.item}>
          <Link href={AppRoutes.CONTACTS} className={styles.link}>
            Контакты
          </Link>
        </li>

        <li className={styles.contacts}>
          <Link href={A1_NUMBER_REF} className={styles.number}>
            <Image src={A1Img} width={24} height={24} sizes="50px" alt="Мобильный оператор А1" />
            {A1_NUMBER}
          </Link>
          <SocialsList color={IconColor.GREEN} width={36} height={36} />
        </li>
      </ul>

      <div
        className={`${styles.overlay} ${isActiveBurger ? styles.overlay_active : ''}`}
        onClick={burgerToggler}
        onKeyDown={keywordHandler}
        role="button"
        tabIndex={0}
      />
    </div>
  );
}

export default memo(BurgerMenu);
