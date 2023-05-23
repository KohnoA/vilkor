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
    <section className={styles.advantages}>
      <div className={styles.advantages__bg}></div>

      <div className={`container ${styles.advantages__wrapper}`}>
        <h2 className={`title title_center ${styles.advantages__title}`}>
          {title.slice(0, -3)}{' '}
          <span className={styles.advantages__title_we}>{title.slice(-3, -1)}</span>
          {title.slice(-1)}
        </h2>

        <p className={styles.advantages__tagline}>{tagline}</p>

        <ul className={styles.advantages__list}>
          {list.map((advatage) => (
            <li key={advatage.title} className={styles.advantage}>
              <advatage.icon width={75} height={75} color={IconColor.green} />

              <h3 className={styles.advantage__title}>{advatage.title}</h3>
              <p>{advatage.desc}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.advantages__transition}></div>
    </section>
  );
}
