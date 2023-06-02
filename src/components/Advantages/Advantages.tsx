import React from 'react';
import styles from './Advantages.module.scss';
import { IconColor } from '@/constants';
import { IAdvatages } from '@/types';

interface AdvantagesProps {
  content: IAdvatages;
}

export default function Advantages({ content }: AdvantagesProps) {
  const { title, tagline, list } = content;

  return (
    <div className={`container section ${styles.advantages}`}>
      <h2 className={`title title_center ${styles.advantages__title}`}>
        {title.slice(0, -3)}{' '}
        <span className={styles.advantages__title_we}>{title.slice(-3, -1)}</span>
        {title.slice(-1)}
      </h2>

      <p className={styles.advantages__tagline}>{tagline}</p>

      <ul className={styles.advantages__list}>
        {list.map(({ Icon, title, desc }) => (
          <li key={title} className={styles.advantage}>
            <Icon width={60} height={60} color={IconColor.green} />

            <h3 className={styles.advantage__title}>{title}</h3>
            <p>{desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
