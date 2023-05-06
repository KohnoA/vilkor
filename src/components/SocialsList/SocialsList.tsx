import React from 'react';
import { socialsList } from '@/constants/socialList';
import Link from 'next/link';
import styles from './SocialsList.module.scss';
import { IconColor } from '@/constants';

interface SocialsListProps {
  color?: IconColor;
}

function SocialsList({ color }: SocialsListProps) {
  return (
    <ul className={styles.socials}>
      {socialsList.map((item) => (
        <li key={item.tel}>
          <Link href={item.tel} className={styles.socials__link}>
            <item.icon {...(color ? { color } : {})} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default React.memo(SocialsList);
