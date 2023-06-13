import Link from 'next/link';
import styles from './Dropdown.module.scss';
import { memo } from 'react';

interface IDropdownItems {
  link: string;
  content: string;
}

interface DropdownProps {
  isShow: boolean;
  items: IDropdownItems[];
}

function Dropdown({ isShow, items }: DropdownProps) {
  return (
    <ul className={`${styles.dropdown} ${isShow ? styles.dropdown_show : ''}`}>
      {items.map((item) => (
        <li key={item.content}>
          <Link href={item.link} className={styles.dropdown__link}>
            {item.content}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default memo(Dropdown);
