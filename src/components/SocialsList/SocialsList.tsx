import React from 'react';
import { SOCIAL_LIST } from '@/constants/socialList';
import Link from 'next/link';
import styles from './SocialsList.module.scss';
import { IconColor } from '@/constants';

interface SocialsListProps {
  color?: IconColor;
}

function SocialsList({ color }: SocialsListProps) {
  return (
    <ul className={styles.socials}>
      {SOCIAL_LIST.map((item) => (
        <li key={item.link}>
          <Link href={item.link} className={styles.socials__link}>
            <item.icon {...(color ? { color } : {})} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default React.memo(SocialsList);
