import React from 'react';
import styles from './Products.module.scss';
import Image from 'next/image';
import Button from '../UI/Button/Button';
import Link from 'next/link';
import { IProduct } from '@/types';

interface ProductsProps {
  content: IProduct[];
}

export default function Products({ content }: ProductsProps) {
  return (
    <section className={`container section`}>
      <h2 className={`title title_left ${styles.products__title}`}>Наша продукция</h2>

      <ul className={styles.products__list}>
        {content.map(({ title, link, image }) => (
          <li key={title}>
            <Link href={link} className={styles.products__item}>
              <div className={styles.products__imageWrapper}>
                <Image
                  className={styles.products__image}
                  src={image}
                  alt={title}
                  priority={false}
                />
              </div>

              <h3 className={styles.products__name}>{title}</h3>

              <div className={styles.products__buttonWrapper}>
                <Button additionalClasses={styles.products__button} text="Подробнее &rsaquo;" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
