import Link from 'next/link';
import styles from './Dropdown.module.scss';
import { memo } from 'react';

interface IDropdownItems {
  link: string;
  title: string;
}

interface DropdownProps {
  isShow: boolean;
  items: IDropdownItems[];
}

function Dropdown({ isShow, items }: DropdownProps) {
  return (
    <ul className={`${styles.dropdown} ${isShow ? styles.dropdown_show : ''}`}>
      {items.map(({ link, title }) => (
        <li key={title}>
          <Link href={link} className={styles.dropdown__link}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default memo(Dropdown);
