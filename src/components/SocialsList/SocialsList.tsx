import { SOCIAL_LIST } from '@/constants/socialList';
import Link from 'next/link';
import styles from './SocialsList.module.scss';
import { IconColor } from '@/constants';
import { memo } from 'react';

interface SocialsListProps {
  color?: IconColor;
  width?: number;
  height?: number;
  full?: boolean;
}

function SocialsList({ full, ...props }: SocialsListProps) {
  return (
    <ul className={styles.socials}>
      {SOCIAL_LIST.map(({ link, Icon, title }) => (
        <li key={title}>
          <Link
            href={link}
            className={`${styles.socials__link} ${full ? styles.socials__link_full : ''}`}
          >
            <Icon {...props} /> {full && title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default memo(SocialsList);
