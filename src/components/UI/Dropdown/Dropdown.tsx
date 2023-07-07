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
  closeHanlder: () => void;
}

function Dropdown({ isShow, items, closeHanlder }: DropdownProps) {
  return (
    <ul className={`${styles.list} ${isShow ? styles.list_show : ''}`}>
      {items.map(({ link, title }) => (
        <li key={title}>
          <Link href={link} className={styles.link} onClick={closeHanlder}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default memo(Dropdown);
