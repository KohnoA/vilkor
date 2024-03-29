import { memo, useEffect, useState } from 'react';
import styles from './DropdownItem.module.scss';
import ArrowUpIcon from '@/components/icons/ArrowUpIcon';
import Link from 'next/link';
import Collapse from '../../Collapse/Collapse';

interface DropdownItemProps {
  className?: string;
  header: string;
  isActiveBurger: boolean;
  content: {
    title: string;
    link: string;
  }[];
  closeBurger: () => void;
}

function DropdownItem({
  className,
  header,
  content,
  isActiveBurger,
  closeBurger,
}: DropdownItemProps) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  useEffect(() => {
    if (!isActiveBurger) setShowDropdown(false);
  }, [isActiveBurger]);

  const setShowDropdownHandler = () => setShowDropdown(!showDropdown);

  const keywordHanlder = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Enter') {
      setShowDropdownHandler();
    }
  };

  return (
    <li {...(className ? { className } : {})}>
      <div
        className={`${styles.header} ${showDropdown ? styles.header_active : ''}`}
        onClick={setShowDropdownHandler}
        onKeyDown={keywordHanlder}
        role="button"
        tabIndex={0}
      >
        <span>{header}</span>
        <ArrowUpIcon width={15} height={15} />
      </div>

      <Collapse isActive={showDropdown}>
        <ul className={styles.list}>
          {content.map(({ title, link }) => (
            <li key={title} className={styles.item}>
              <Link href={link} onClick={closeBurger}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </Collapse>
    </li>
  );
}

export default memo(DropdownItem);
