import { memo } from 'react';
import styles from './AccordionItem.module.scss';
import ArrowUpIcon from '@/components/icons/ArrowUpIcon';
import Link from 'next/link';

type FakeAccordionItemProps = {
  title: string;
  link: string;
};

function FakeAccordionItem({ title, link }: FakeAccordionItemProps) {
  return (
    <li className={styles.fakeItemContainer}>
      <Link href={link} className={styles.header}>
        <p className={styles.header__title}>{title}</p>

        <button className={styles.fakeToggler} tabIndex={-1}>
          <ArrowUpIcon width={19} height={19} />
        </button>
      </Link>
    </li>
  );
}

export default memo(FakeAccordionItem);
