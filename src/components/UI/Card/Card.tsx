import Image from 'next/image';
import styles from './Card.module.scss';
import { IProduct, IProductItem } from '@/types';
import Link from 'next/link';
import Button from '../Button/Button';
import { ReactNode, memo } from 'react';

interface CardProps {
  content: IProduct | IProductItem;
  link: string;
  children?: ReactNode;
}

function Card({ content, link, children }: CardProps) {
  const { title, image } = content;

  return (
    <li>
      <Link href={link} className={styles.item}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={image}
            alt={title}
            sizes="330px"
            placeholder="blur"
            blurDataURL={image.blurDataURL}
          />
        </div>

        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>

          {children}

          <Button additionalClasses={styles.button}>Подробнее &rsaquo;</Button>
        </div>
      </Link>
    </li>
  );
}

export default memo(Card);
